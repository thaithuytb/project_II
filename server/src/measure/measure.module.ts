import { Module } from '@nestjs/common';
import { MeasureService } from './measure.service';
import { MeasureController } from './measure.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Measure } from '../entities/measure.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Measure])],
  providers: [MeasureService],
  controllers: [MeasureController],
})
export class MeasureModule {}
