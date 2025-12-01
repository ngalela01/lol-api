import { Module } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { AnnualTournamentController } from './annual-tournament.controller';
import { YearsService } from '../years/years.service';
import { TournamentService } from '../tournament/tournament.service';
import { CountryService } from '../country/country.service';

@Module({
  controllers: [AnnualTournamentController],
  providers: [AnnualTournamentService, YearsService, TournamentService, CountryService],
})
export class AnnualTournamentModule {}
