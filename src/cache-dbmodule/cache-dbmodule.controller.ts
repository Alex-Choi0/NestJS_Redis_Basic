import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CacheDbmoduleService } from './cache-dbmodule.service';
import { CreateCacheDbmoduleDto } from './dto/create-cache-dbmodule.dto';
import { UpdateCacheDbmoduleDto } from './dto/update-cache-dbmodule.dto';

@Controller('cache-dbmodule')
export class CacheDbmoduleController {
  constructor(private readonly cacheDbmoduleService: CacheDbmoduleService) {}

  @Post()
  create(@Body() createCacheDbmoduleDto: CreateCacheDbmoduleDto) {
    return this.cacheDbmoduleService.create(createCacheDbmoduleDto);
  }

  @Get()
  findAll() {
    return this.cacheDbmoduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cacheDbmoduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCacheDbmoduleDto: UpdateCacheDbmoduleDto) {
    return this.cacheDbmoduleService.update(+id, updateCacheDbmoduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cacheDbmoduleService.remove(+id);
  }
}
