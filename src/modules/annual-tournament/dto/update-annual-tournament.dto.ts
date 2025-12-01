import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnualTournamentDto } from './create-annual-tournament.dto';

export class UpdateAnnualTournamentDto extends PartialType(CreateAnnualTournamentDto) {
    year?: string;
    tournament?: string;
    country?: string;
    date_beginning?: Date;
    date_end?: Date;
    winner?: string;
}
