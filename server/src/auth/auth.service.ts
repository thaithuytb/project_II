import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { sign, verify } from 'jsonwebtoken';
import * as argon2 from 'argon2';
import { RegisterDto } from './dtos/register_input.dto';
import { LoginDto } from './dtos/login_input.dto';
import { responseSuccess } from '../responses/success';
import resolveError from '../responses/resolveError';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async register(registerInput: RegisterDto) {
    const { email, password } = registerInput;

    try {
      const findUser = await this.findUserByEmail(email);

      if (findUser) {
        throw new HttpException('Email is existed', HttpStatus.BAD_REQUEST);
      }

      const hashedPassword = await argon2.hash(password);

      const newUser = new User();
      newUser.email = email;
      newUser.password = hashedPassword;

      await this.userRepository.persistAndFlush(newUser);

      const token = await this.signToken({
        id: newUser.id,
        email: newUser.email,
      } as User);

      return responseSuccess({
        user: newUser,
        token,
      });
    } catch (error) {
      resolveError(error);
    }
  }

  async login(loginInput: LoginDto) {
    const { email, password } = loginInput;
    try {
      const findUser = await this.findUserByEmail(email);

      if (!findUser) {
        throw new HttpException(
          'Email or password is incorrect',
          HttpStatus.BAD_REQUEST,
        );
      }

      const correctPassword = await argon2.verify(findUser.password, password);
      if (!correctPassword) {
        throw new HttpException(
          'Email or password is incorrect',
          HttpStatus.BAD_REQUEST,
        );
      }

      const token = await this.signToken({
        id: findUser.id,
        email: findUser.email,
      } as User);

      return responseSuccess({ user: findUser, token });
    } catch (error) {
      resolveError(error);
    }
  }

  async signToken(user: User) {
    return sign(user, 'abc');
  }

  async verifyToken(token: string) {
    return await verify(token, 'abc');
  }

  async findUserByIdAndEmail(userId: number, email: string) {
    return await this.userRepository.findOne({
      id: userId,
      email,
    });
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({
      email,
    });
  }
}
