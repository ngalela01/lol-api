import { PartialType } from '@nestjs/mapped-types';
import { CreateNationalityDto } from './create-nationality.dto';

export class UpdateNationalityDto extends PartialType(CreateNationalityDto) {
    country?: string;
    participant?: string;
}
