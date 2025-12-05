import { Module } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { AnnualLeagueController } from './annual-league.controller';
import { YearsService } from '../years/years.service';
import { LeagueService } from '../league/league.service';
import { CountryService } from '../country/country.service';

@Module({
  controllers: [AnnualLeagueController],
  providers: [AnnualLeagueService, YearsService, LeagueService, CountryService],
})
export class AnnualLeagueModule {}
