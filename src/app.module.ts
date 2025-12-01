import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from 'mikro-orm.config';
import { RegionModule } from './modules/region/region.module';
import { CountryModule } from './modules/country/country.module';
import { YearsModule } from './modules/years/years.module';
import { LeagueModule } from './modules/league/league.module';
import { AnnualLeagueModule } from './modules/annual-league/annual-league.module';
import { TeamModule } from './modules/team/team.module';
import { PlayerModule } from './modules/player/player.module';
import { CoachModule } from './modules/coach/coach.module';
import { TournamentModule } from './modules/tournament/tournament.module';
import { AnnualTournamentModule } from './modules/annual-tournament/annual-tournament.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { NationalityModule } from './modules/nationality/nationality.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtGuard } from './modules/auth/jwt.guard';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    RegionModule,
    CountryModule,
    YearsModule,
    LeagueModule,
    AnnualLeagueModule,
    TeamModule,
    PlayerModule,
    CoachModule,
    TournamentModule,
    AnnualTournamentModule,
    ParticipantModule,
    NationalityModule,
    UserModule,
    AuthModule
  ],
  providers: [JwtGuard]
})
export class AppModule {}
