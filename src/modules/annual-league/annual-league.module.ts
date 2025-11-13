import { Module } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { AnnualLeagueController } from './annual-league.controller';
import { YearsModule } from '../years/years.module'; 
import { LeagueModule } from '../league/league.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AnnualLeague } from './entities/annual-league.entity';
import { Years } from '../years/entities/year.entity';
import { League } from '../league/entities/league.entity';
import { YearsService } from '../years/years.service';
import { LeagueService } from '../league/league.service';
import { CountryService } from '../country/country.service';

@Module({
  controllers: [AnnualLeagueController],
  providers: [AnnualLeagueService, YearsService, LeagueService, CountryService],
})
export class AnnualLeagueModule {}
