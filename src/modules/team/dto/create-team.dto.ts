export class CreateTeamDto {
  long_name_team: string;
  short_name_team: string;
  creation_date?: Date;
  league_id: string;
  country_id: string;
}
