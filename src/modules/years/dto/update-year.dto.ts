import { PartialType } from '@nestjs/mapped-types';
import { CreateYearDto } from './create-year.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateYearDto extends PartialType(CreateYearDto) {
    @ApiPropertyOptional({ example: '2025', description: "L'année" })
    year: number
}
