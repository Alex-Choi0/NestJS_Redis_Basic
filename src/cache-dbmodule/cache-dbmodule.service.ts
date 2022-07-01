// src/cache-dbmodule/cache-dbmodule.service.ts
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheDbmoduleService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  // DB에 키와 데이터를 생성한다.
  async create(key: string, data: any) {
    return await this.cacheManager.set(key, data);
  }

  // 키값을 이용하여 DB를 조회한다.
  async get(key: string) {
    return await this.cacheManager.get(key);
  }

  // 키값을 이용하여 DB의 데이터를 삭제한다.
  async delete(key: string) {
    return await this.cacheManager.del(key);
  }
}
