import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from '../entities/user.entity';
import * as jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import { LoginDto } from './dtos/login_input.dto';
import { RegisterDto } from './dtos/register_input.dto';

describe('AuthService', () => {
  let authService: AuthService;

  const mockUserRepository = {
    findOne: jest.fn(),
    persistAndFlush: jest.fn().mockReturnValue(Promise<void>),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('Register', () => {
    const registerInput: RegisterDto = {
      email: 'ngoquangthai@gmail.com',
      password: '123456',
      confirm_password: '123456',
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be return 400 code and message: Email is existed', async () => {
      const mockFindUserByEmail = jest
        .spyOn(authService, 'findUserByEmail')
        .mockImplementation((email) =>
          Promise.resolve({ email, id: 7 } as User),
        );

      try {
        await authService.register(registerInput);
      } catch (error) {
        expect(mockFindUserByEmail).toBeCalledTimes(1);
        expect(error.message).toEqual('Email is existed');
        expect(error.status).toBe(400);
      }
    });

    it('should be return 201 code when created new user', async () => {
      const mockFindUserByEmail = jest
        .spyOn(authService, 'findUserByEmail')
        .mockImplementation(() => Promise.resolve(null));

      const mockHashFunctionOfArgon2 = jest
        .spyOn(argon2, 'hash')
        .mockImplementation(() => Promise.resolve(Date.now().toString()));

      jest
        .spyOn(authService, 'signToken')
        .mockImplementation(() => Promise.resolve(Date.now().toString()));

      const res = await authService.register(registerInput);
      expect(mockFindUserByEmail).toBeCalledTimes(1);
      expect(mockHashFunctionOfArgon2).toBeCalledTimes(1);
      expect(res).toEqual({
        success: true,
        data: {
          user: expect.any(Object) as User,
          token: expect.any(String),
        },
      });
    });
  });

  describe('login', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const loginInput: LoginDto = {
      email: 'ngoquangthai@gmail.com',
      password: '123456',
    };

    it('should be return 400 code when email incorrect', async () => {
      const mockFindUserByEmail = jest
        .spyOn(authService, 'findUserByEmail')
        .mockImplementation(() => Promise.resolve(null));
      try {
        await authService.login(loginInput);
      } catch (error) {
        expect(error.message).toEqual('Email or password is incorrect');
        expect(error.status).toEqual(400);
        expect(mockFindUserByEmail).toBeCalledTimes(1);
      }
    });

    it('should be return 400 code when password incorrect', async () => {
      const mockFindUserByEmail = jest
        .spyOn(authService, 'findUserByEmail')
        .mockImplementation((email) =>
          Promise.resolve({ email, id: 7 } as User),
        );

      const mockVerifyOfArgon2 = jest
        .spyOn(argon2, 'verify')
        .mockImplementation(() => Promise.resolve(false));

      try {
        await authService.login(loginInput);
      } catch (error) {
        expect(error.message).toEqual('Email or password is incorrect');
        expect(error.status).toEqual(400);
        expect(mockFindUserByEmail).toBeCalledTimes(1);
        expect(mockVerifyOfArgon2).toBeCalledTimes(1);
      }
    });

    it('should be return 500 code when server error', async () => {
      mockUserRepository.findOne = jest
        .fn()
        .mockImplementation((email) => Promise.reject('Server error'));

      try {
        await authService.login(loginInput);
      } catch (error) {
        expect(error.message).toEqual('Server error');
        expect(error.status).toEqual(500);
        expect(mockUserRepository.findOne).toBeCalledTimes(1);
      }
    });

    it('should be return data when login successful', async () => {
      const mockFindUserByEmail = jest
        .spyOn(authService, 'findUserByEmail')
        .mockImplementation((email) =>
          Promise.resolve({ email, id: 7 } as User),
        );

      const mockVerifyOfArgon2 = jest
        .spyOn(argon2, 'verify')
        .mockImplementation(() => Promise.resolve(true));

      jest
        .spyOn(authService, 'signToken')
        .mockImplementation(() => Promise.resolve(Date.now().toString()));

      const res = await authService.login(loginInput);
      expect(mockFindUserByEmail).toBeCalledTimes(1);
      expect(mockVerifyOfArgon2).toBeCalledTimes(1);
      expect(res).toEqual({
        success: true,
        data: {
          user: expect.any(Object) as User,
          token: expect.any(String),
        },
      });
    });
  });

  describe('findUserByEmail', () => {
    it('should be return an user', async () => {
      mockUserRepository.findOne = jest
        .fn()
        .mockImplementation((email) => Promise.resolve({ ...email, id: 7 })); //email is object email?
      const res = await authService.findUserByEmail('ngoquangthai@gmail.com');
      expect(res).toEqual({
        id: 7,
        email: 'ngoquangthai@gmail.com',
      });
    });

    it('should be return a null when not found user from database', async () => {
      mockUserRepository.findOne = jest
        .fn()
        .mockImplementation(() => Promise.resolve(null));

      const res = await authService.findUserByEmail('ngoquangthai@gmail.com');
      expect(res).toEqual(null);
    });
  });

  describe('singToken', () => {
    it('should be return a token', async () => {
      jest
        .spyOn(jwt, 'sign')
        .mockImplementation(() => Promise.resolve(Date.now().toString()));

      const res = await authService.signToken({
        id: 7,
        email: 'thai@gmail.com',
      } as User);

      expect(res).toEqual(expect.any(String));
    });
  });
});
