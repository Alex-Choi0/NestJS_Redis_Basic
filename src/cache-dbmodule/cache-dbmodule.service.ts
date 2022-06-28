import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateCacheDbmoduleDto } from './dto/create-cache-dbmodule.dto';
import { UpdateCacheDbmoduleDto } from './dto/update-cache-dbmodule.dto';

@Injectable()
export class CacheDbmoduleService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  create(createCacheDbmoduleDto: CreateCacheDbmoduleDto) {
    return 'This action adds a new cacheDbmodule';
  }

  async findAll() {
    console.log('save test as helloworld');
    await this.cacheManager.set(
      'test',
      JSON.stringify({
        user: 'alex',
        age: 30,
        email: 'alex@gmail.com',
        info: {
          hobby: ['bick'],
        },
      }),
    );
    return await this.cacheManager.get('test');
  }

  findOne(id: number) {
    return `This action returns a #${id} cacheDbmodule`;
  }

  update(id: number, updateCacheDbmoduleDto: UpdateCacheDbmoduleDto) {
    return `This action updates a #${id} cacheDbmodule`;
  }

  remove(id: number) {
    return `This action removes a #${id} cacheDbmodule`;
  }
}
