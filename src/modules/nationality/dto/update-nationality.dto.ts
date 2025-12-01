import { PartialType } from '@nestjs/mapped-types';
import { CreateNationalityDto } from './create-nationality.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateNationalityDto extends PartialType(CreateNationalityDto) {
    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du pays de la nationalité" })
    country_id?: string;
    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du participant de la nationalité" })
    participant_id?: string;
}
