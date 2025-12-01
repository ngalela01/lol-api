import { PartialType } from '@nestjs/mapped-types';
import { CreateLeagueDto } from './create-league.dto';

export class UpdateLeagueDto extends PartialType(CreateLeagueDto) {
    long_name_league?: string;
    short_name_league?: string;
    region?: string;
}
