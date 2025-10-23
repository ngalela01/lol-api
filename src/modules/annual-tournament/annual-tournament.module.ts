import { Module } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { AnnualTournamentController } from './annual-tournament.controller';

@Module({
  controllers: [AnnualTournamentController],
  providers: [AnnualTournamentService],
})
export class AnnualTournamentModule {}
