export class CreateAnnualTournamentDto {
    year: string;
    tournament: string;
    country?: string;
    date_beginning?: Date;
    date_end?: Date;
    winner?: string;
}
