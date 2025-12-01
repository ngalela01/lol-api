import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateAnnualTournamentDto {
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de l'année du tournoi annuel" })
    year: string;
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du tournoi" })
    tournament: string;
    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du pays du tournoi" })
    country?: string;
    @ApiPropertyOptional({ example: '2023-01-01', description: "La date de début du tournoi annuel" })
    date_beginning?: Date;
    @ApiPropertyOptional({ example: '2023-12-31', description: "La date de fin du tournoi annuel" })
    date_end?: Date;
    @ApiPropertyOptional({ example: 'Équipe A', description: "L'équipe gagnante du tournoi annuel" })
    winner?: string;
}
