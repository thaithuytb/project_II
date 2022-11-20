import { Module } from '@nestjs/common';
import { LocationMonitoringService } from './location_monitoring.service';
import { LocationMonitoringController } from './location_monitoring.controller';
import { LocationMonitoring } from '../entities/location_monitoring.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([LocationMonitoring])],
  providers: [LocationMonitoringService],
  controllers: [LocationMonitoringController],
  exports: [LocationMonitoringService],
})
export class LocationMonitoringModule {}
