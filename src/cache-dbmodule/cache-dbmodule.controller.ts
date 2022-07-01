// src/cache-dbmodule/cache-dbmodule.controller.ts
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CacheDbmoduleService } from './cache-dbmodule.service';

class CreateRedis {
  @ApiProperty({
    description: 'Redis의 키값',
    type: String,
    example: 'key1',
  })
  key: string;

  @ApiProperty({
    description: 'Redis의 키에 대응하는 데이터 값',
    type: Object,
    example: {
      name: 'alex',
      age: 30,
      hobby: ['bick', 'swimming', 'programming'],
      info: {
        school: 'inch',
        address: 'seoul',
        nation: 'korean',
      },
    },
  })
  data: any;
}

@ApiTags('Redis API')
@Controller('cache-dbmodule')
export class CacheDbmoduleController {
  constructor(private readonly cacheDbmoduleService: CacheDbmoduleService) {}

  @Post()
  @ApiOperation({
    summary: 'create redis key and data',
    description: '키와 대응되는 데이터를 Redis에 생성한다.',
  })
  async create(@Body() createRedis: CreateRedis) {
    return await this.cacheDbmoduleService.create(
      createRedis.key,
      createRedis.data,
    );
  }

  @Get(':key')
  @ApiOperation({
    summary: 'Search by redis key and retrive data',
    description: 'Redis 키를 이용하여 데이터를 갖고온다.',
  })
  @ApiParam({
    name: 'key',
    example: 'key1',
  })
  async get(@Param('key') key: string) {
    return await this.cacheDbmoduleService.get(key);
  }

  @Delete(':key')
  @ApiOperation({
    summary: 'Delete data by useing key',
    description: 'Redis의 키를 이용하여 데이터를 삭제한다.',
  })
  @ApiParam({
    name: 'key',
    example: 'key1',
  })
  async delete(@Param('key') key: string) {
    return await this.cacheDbmoduleService.delete(key);
  }
}
