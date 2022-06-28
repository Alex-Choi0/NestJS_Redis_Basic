import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheDbmoduleModule } from './cache-dbmodule/cache-dbmodule.module';

@Module({
  imports: [CacheDbmoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
