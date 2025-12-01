import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateTeamDto {
  @ApiPropertyOptional({ example: 'Team 1', description: "Le nom long de l'équipe" })
  long_name_team?: string;
  @ApiPropertyOptional({ example: 'T1', description: "Le nom court de l'équipe" })
  short_name_team?: string;
  @ApiPropertyOptional({ example: '2022-01-01', description: "La date de création de l'équipe" })
  creation_date?: Date;
  @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de la ligue de l'équipe" })
  league_id?: string;
  @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du pays de l'équipe" })
  country_id?: string;
}
