import { Request } from 'express';
import { User } from '../../entities/user.entity';

export interface MiddlewareRequestType extends Request {
  user?: User;
}
