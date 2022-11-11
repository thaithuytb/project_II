import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Measure } from '../entities/measure.entity';
import { EntityRepository } from '@mikro-orm/postgresql';
import resolveError from '../responses/resolveError';
import { responseSuccess } from '../responses/success';

@Injectable()
export class MeasureService {
  constructor(
    @InjectRepository(Measure)
    private readonly measureRepository: EntityRepository<Measure>,
  ) {}

  async getMeasureByLocationId(locationId: number) {
    try {
      const location = await this.measureRepository.findOne(
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
      if (!location) {
        throw new HttpException('No data', HttpStatus.NO_CONTENT);
      }

      return responseSuccess(location);
    } catch (error) {
      resolveError(error);
    }
  }

  async getMeasureByIdAndLocationId(locationId: number, measureId: number) {
    try {
      const location = await this.measureRepository.findOne({
        id: measureId,
        locationMonitoring: {
          id: locationId,
        },
      });

      if (!location) {
        throw new HttpException('Measure not found', HttpStatus.NOT_FOUND);
      }

      return responseSuccess(location);
    } catch (error) {
      resolveError(error);
    }
  }
}
