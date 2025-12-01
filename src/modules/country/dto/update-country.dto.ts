import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryDto } from './create-country.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
    @ApiPropertyOptional({ example: 'France', description: "Le nom du pays" })
    name_country?: string;
    @ApiPropertyOptional({ example: 'FR', description: "Le code ISO du pays" })
    code_iso?: string;
}
