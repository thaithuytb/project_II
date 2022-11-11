import { Test, TestingModule } from '@nestjs/testing';
import { MeasureService } from './measure.service';

describe('MeasureService', () => {
  let service: MeasureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeasureService],
    }).compile();

    service = module.get<MeasureService>(MeasureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
