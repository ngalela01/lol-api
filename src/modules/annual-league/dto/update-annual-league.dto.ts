import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnualLeagueDto } from './create-annual-league.dto';

export class UpdateAnnualLeagueDto extends PartialType(CreateAnnualLeagueDto) {
    year?: string;
    league?: string;
    country?: string;
    date_beginning?: Date;
    date_end?: Date;
    winner?: string;
}
