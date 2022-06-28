import { Test, TestingModule } from '@nestjs/testing';
import { CacheDbmoduleService } from './cache-dbmodule.service';

describe('CacheDbmoduleService', () => {
  let service: CacheDbmoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheDbmoduleService],
    }).compile();

    service = module.get<CacheDbmoduleService>(CacheDbmoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
