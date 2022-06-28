import { PartialType } from '@nestjs/mapped-types';
import { CreateCacheDbmoduleDto } from './create-cache-dbmodule.dto';

export class UpdateCacheDbmoduleDto extends PartialType(CreateCacheDbmoduleDto) {}
