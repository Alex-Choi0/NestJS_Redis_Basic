// src/cache-dbmodule/cache-dbmodule.module.ts
import { CacheModule, Global, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { CacheDbmoduleController } from './cache-dbmodule.controller';
import { CacheDbmoduleService } from './cache-dbmodule.service';
require('dotenv').config(); // env파일을 사용하기 위한 코드

// CacheModule를 설정합니다.
export const cacheModule = CacheModule.registerAsync({
  useFactory: async () => ({
    store: redisStore, // 저장위치 (Default : 메모리)
    host: process.env.REDIS_HOST, // Redis 접속 주소(Default : 127.0.0.1)
    port: process.env.REDIS_PORT, // Redis 접속 포트 (Default : 6379)
    ttl: 0, // 해당 키의 유효시간
    auth_pass: process.env.REDIS_PASSWORD, // Redis의 비밀번호
  }),
});

@Global() // 다른 모든 모듈에서도 사용 가능하게 Global로 전환
@Module({
  imports: [cacheModule],
  controllers: [CacheDbmoduleController],
  providers: [CacheDbmoduleService],
})
export class CacheDbmoduleModule {}
