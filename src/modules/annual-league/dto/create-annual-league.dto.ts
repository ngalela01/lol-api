import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateAnnualLeagueDto {
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de l'année de la ligue annuelle" })
    year: string;

    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de la ligue" })
    league: string;

    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du pays de la ligue" })
    country?: string;

    @ApiPropertyOptional({ example: '2023-01-01', description: "La date de début de la ligue annuelle" })
    date_beginning?: Date;

    @ApiPropertyOptional({ example: '2023-12-31', description: "La date de fin de la ligue annuelle" })
    date_end?: Date;

    @ApiPropertyOptional({ example: 'Équipe A', description: "L'équipe gagnante de la ligue annuelle" })
    winner?: string;
}
