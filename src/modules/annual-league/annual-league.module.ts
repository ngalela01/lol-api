import { Module } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { AnnualLeagueController } from './annual-league.controller';

@Module({
  controllers: [AnnualLeagueController],
  providers: [AnnualLeagueService],
})
export class AnnualLeagueModule {}
