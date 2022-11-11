import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LocationMonitoringModule } from './location_monitoring/location_monitoring.module';
import { MeasureModule } from './measure/measure.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MikroOrmModule.forRoot(),
    LocationMonitoringModule,
    MeasureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
