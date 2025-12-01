import { ApiProperty } from "@nestjs/swagger";

export class CreateTournamentDto {
    @ApiProperty({ example: 'World Championship', description: "Le nom long du tournoi" })
    long_name_tournament: string;
    @ApiProperty({ example: 'WChamp', description: "Le nom court du tournoi" })
    short_name_tournament: string;
}
