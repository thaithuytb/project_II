import { Injectable, NestMiddleware } from '@nestjs/common';
import { MiddlewareRequestType } from './interfaces/middlewareRequestType';
import { NextFunction, Response } from 'express';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class verifyTokenMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: MiddlewareRequestType, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    const token = authHeader
      ? authHeader.split(' ')[0] === 'bearer'
        ? authHeader.split(' ')[1]
        : false
      : false;

    if (!token) {
      return res.status(401).json({
        statusCode: 401,
        message: 'UnAuthorization',
      });
    }

    try {
      const decode = await this.authService.verifyToken(token);

      const user = await this.authService.findUserByIdAndEmail(
        decode.id,
        decode.email,
      );

      if (!user) {
        return res.status(403).json({
          statusCode: 403,
          message: 'Forbidden',
        });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Invalid or expired token',
      });
    }
  }
}
