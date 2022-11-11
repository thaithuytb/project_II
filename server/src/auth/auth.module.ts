import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from 'src/entities/user.entity';
import { verifyTokenMiddleware } from '../middlewares/verify_token';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyTokenMiddleware).forRoutes('api/v1/auth/token');
  }
}
