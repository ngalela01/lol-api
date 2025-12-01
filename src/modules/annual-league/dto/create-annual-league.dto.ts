export class CreateAnnualLeagueDto {
    year: string;
    league: string;
    country?: string;
    date_beginning?: Date;
    date_end?: Date;
    winner?: string;
}
