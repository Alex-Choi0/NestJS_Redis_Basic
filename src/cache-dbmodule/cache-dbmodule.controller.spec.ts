import { Test, TestingModule } from '@nestjs/testing';
import { CacheDbmoduleController } from './cache-dbmodule.controller';
import { CacheDbmoduleService } from './cache-dbmodule.service';

describe('CacheDbmoduleController', () => {
  let controller: CacheDbmoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CacheDbmoduleController],
      providers: [CacheDbmoduleService],
    }).compile();

    controller = module.get<CacheDbmoduleController>(CacheDbmoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
