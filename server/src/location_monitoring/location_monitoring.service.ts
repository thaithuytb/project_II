import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LocationMonitoring } from '../entities/location_monitoring.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import resolveError from '../responses/resolveError';
import { responseSuccess } from '../responses/success';

@Injectable()
export class LocationMonitoringService {
  constructor(
    @InjectRepository(LocationMonitoring)
    private readonly locationMonitoringRepository: EntityRepository<LocationMonitoring>,
  ) {}

  async getLocations() {
    try {
      const data = await this.locationMonitoringRepository.findAll();
      return responseSuccess(data);
    } catch (error) {
      resolveError(error);
    }
  }

  async getLocationById(locationId: number) {
    try {
      const data = await this.locationMonitoringRepository.findOne({
        id: locationId,
      });

      if (!data) {
        throw new HttpException(
          `Location not found with id = ${locationId}`,
          HttpStatus.NOT_FOUND,
        );
      }

      return data;
    } catch (error) {
      resolveError(error);
    }
  }
}
