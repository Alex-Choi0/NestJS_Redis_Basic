import { CacheModule, Global, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { CacheDbmoduleController } from './cache-dbmodule.controller';
import { CacheDbmoduleService } from './cache-dbmodule.service';
require('dotenv').config();

export const cacheModule = CacheModule.registerAsync({
  useFactory: async () => ({
    store: redisStore,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    ttl: 0,
    auth_pass: process.env.REDIS_PASSWORD,
  }),
});

@Global()
@Module({
  imports: [cacheModule],
  controllers: [CacheDbmoduleController],
  providers: [CacheDbmoduleService],
})
export class CacheDbmoduleModule {}
