import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { sign } from 'jsonwebtoken';
import resolveError from 'src/errors/resolveError';
import { hash, verify } from 'argon2';
import { RegisterDto } from './dtos/register_input.dto';
import { LoginDto } from './dtos/login_input.dto';

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

      const hashedPassword = await hash(password);

      const newUser = new User();
      newUser.email = email;
      newUser.password = hashedPassword;

      const userDb = await this.userRepository.create(newUser);

      await this.userRepository.persistAndFlush(userDb);

      const token = await this.signToken({
        id: userDb.id,
        email: userDb.email,
      } as User);

      return {
        user: userDb,
        token,
      };
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

      const correctPassword = await verify(findUser.password, password);
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

      return {
        user: findUser,
        token,
      };
    } catch (error) {
      resolveError(error);
    }
  }

  async signToken(user: User) {
    return sign(user, 'abc');
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({
      email,
    });
  }
}
