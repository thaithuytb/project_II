import { Controller, Get, Param } from '@nestjs/common';
import { MeasureService } from './measure.service';

@Controller('api/v1/measures')
export class MeasureController {
  constructor(private measureService: MeasureService) {}

  @Get('/:locationId')
  async getLatestMeasure(@Param('locationId') locationId: string) {
    return await this.measureService.getMeasureByLocationId(+locationId);
  }

  @Get('/:locationId/:measureId')
  async getMeasureByIdAndLocationId(
    @Param('locationId') locationId: string,
    @Param('measureId') measureId: string,
  ) {
    return await this.measureService.getMeasureByIdAndLocationId(
      +locationId,
      +measureId,
    );
  }
}
