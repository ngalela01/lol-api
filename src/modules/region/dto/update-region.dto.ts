import { PartialType } from '@nestjs/mapped-types';
import { CreateRegionDto } from './create-region.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
    @ApiPropertyOptional({ example: 'Europe', description: "Le nom de la région" })
    name?: string;
}
