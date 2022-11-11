import { Test, TestingModule } from '@nestjs/testing';
import { LocationMonitoringService } from './location_monitoring.service';

describe('LocationMonitoringService', () => {
  let service: LocationMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationMonitoringService],
    }).compile();

    service = module.get<LocationMonitoringService>(LocationMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
