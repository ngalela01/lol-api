import { defineConfig } from '@mikro-orm/sqlite';
import { User } from './src/modules/user/entities/user.entity';
import { Region } from './src/modules/region/entities/region.entity';
import { Country } from './src/modules/country/entities/country.entity';
import { League } from './src/modules/league/entities/league.entity';
import { Team } from './src/modules/team/entities/team.entity';
import { Tournament } from './src/modules/tournament/entities/tournament.entity';
import { Participant } from './src/modules/participant/entities/participant.entity';
import { Years } from './src/modules/years/entities/years.entity';
import { AnnualLeague } from './src/modules/annual-league/entities/annual-league.entity';
import { AnnualTournament } from './src/modules/annual-tournament/entities/annual-tournament.entity';
import { Nationality } from './src/modules/nationality/entities/nationality.entity';

export default defineConfig({
  dbName: 'database.sqlite',
  // entities: [User],
  entities: [
    Region,
    Country,
    Years,
    League,
    AnnualLeague,
    Team,
    Tournament,
    AnnualTournament,
    Participant,
    Nationality,
    User,
  ],
  driverOptions: {
    nativeBinding: true,
  },
  debug: true,
  migrations: {
    path: './migrations',
    glob: '!(*.d).{js,ts}',
  },
  schemaGenerator: {
    disableForeignKeys: true,
  },
});
