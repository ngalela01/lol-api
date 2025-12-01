import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentDto } from './create-tournament.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {
    @ApiPropertyOptional({ example: 'World Championship', description: "Le nom long du tournoi" })
    long_name_tournament: string;
    @ApiPropertyOptional({ example: 'WChamp', description: "Le nom court du tournoi" })
    short_name_tournament: string;
}
