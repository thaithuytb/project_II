import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Measure } from '../entities/measure.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import resolveError from '../responses/resolveError';
import { responseSuccess } from '../responses/success';
import { CreateMeasureDto } from './dtos/createMeasureDto';
import { LocationMonitoringService } from '../location_monitoring/location_monitoring.service';

@Injectable()
export class MeasureService {
  constructor(
    @InjectRepository(Measure)
    private readonly measureRepository: EntityRepository<Measure>,
    private readonly locationMonitoringService: LocationMonitoringService,
  ) {}

  async getMeasureByLocationId(locationId: number) {
    try {
      const measure = await this.measureRepository.findOne(
        {
          locationMonitoring: {
            id: locationId,
          },
        },
        {
          orderBy: {
            createdAt: 'DESC',
          },
        },
      );
      if (!measure) {
        throw new HttpException('No data', HttpStatus.NOT_FOUND);
      }

      const { d0_do, ...measureTransfrom } = measure;

      return responseSuccess({
        ...measureTransfrom,
        _do: d0_do,
      });
    } catch (error) {
      resolveError(error);
    }
  }

  async getMeasureByIdAndLocationId(locationId: number, measureId: number) {
    try {
      const measure = await this.measureRepository.findOne({
        id: measureId,
        locationMonitoring: {
          id: locationId,
        },
      });

      if (!measure) {
        throw new HttpException('Measure not found', HttpStatus.NOT_FOUND);
      }

      const { d0_do, ...measureTransfrom } = measure;

      return responseSuccess({
        ...measureTransfrom,
        _do: d0_do,
      });
    } catch (error) {
      resolveError(error);
    }
  }

  async createMeasure(locationId: number, inputMeasure: CreateMeasureDto) {
    const { ph, d0_do, amoni, clorua, fe } = inputMeasure;
    try {
      const location = await this.locationMonitoringService.getLocationById(
        locationId,
      );

      const newMeasure = new Measure(ph, d0_do, amoni, clorua, fe);
      newMeasure.locationMonitoring = location;

      await this.measureRepository.persistAndFlush(newMeasure);

      return responseSuccess({
        ...newMeasure,
        _do: newMeasure.d0_do,
      });
    } catch (error) {
      resolveError(error);
    }
  }
}
