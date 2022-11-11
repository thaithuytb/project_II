import { Controller, Get } from '@nestjs/common';
import { LocationMonitoringService } from './location_monitoring.service';

@Controller('api/v1/location_monitorings')
export class LocationMonitoringController {
  constructor(private locationMonitoringService: LocationMonitoringService) {}

  @Get('/')
  async getAll() {
    return await this.locationMonitoringService.getLocations();
  }
}
