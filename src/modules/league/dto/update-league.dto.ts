import { PartialType } from '@nestjs/mapped-types';
import { CreateLeagueDto } from './create-league.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLeagueDto extends PartialType(CreateLeagueDto) {
    @ApiPropertyOptional({ example: 'League of Legends EMEA Championships', description: "Le nom long de la ligue" })
    long_name_league?: string;
    @ApiPropertyOptional({ example: 'LEC', description: "Le nom court de la ligue" })
    short_name_league?: string;
    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de la région de la ligue" })
    region?: string;
}
