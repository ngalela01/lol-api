import { ApiProperty } from "@nestjs/swagger";

export class CreateLeagueDto {
    @ApiProperty({ example: 'League of Legends EMEA Championships', description: "Le nom long de la ligue" })
    long_name_league: string;
    @ApiProperty({ example: 'LEC', description: "Le nom court de la ligue" })
    short_name_league: string;
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de la région de la ligue" })
    region_id: string;
}
