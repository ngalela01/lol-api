import { Seeder } from '@mikro-orm/seeder';
import { RegionSeeder } from './region.seeder';
import { CountrySeeder } from './country.seeder';
import { YearSeeder } from './year.seeder';
import { LeagueSeeder } from './league.seeder';
import { TeamSeeder } from './team.seeder';
import { TournamentSeeder } from './tournament.seeder';
import { AnnualleagueSeeder } from './annual-league.seeder';
import { ParticipantSeeder } from './participant.seeder';
import { NationalitySeeder } from './nationality.seeder';
import { annualTournamentSeeder } from './annual-tournament.seeder';
import { UserSeeder } from './UserSeeder';

export class DatabaseSeeder extends Seeder {
  async run(em) {
    console.log('🚀 Lancement du seeding...');

    await this.call(em, [
      RegionSeeder,           // Les régions d’abord
      CountrySeeder,          // Puis les pays
      YearSeeder,             // Les années
      LeagueSeeder,           // Les ligues liées aux régions
      TeamSeeder,             // ⚙️ Les équipes (besoin de pays + ligues)
      TournamentSeeder,       // Les tournois
      AnnualleagueSeeder,     // Les éditions de ligues (besoin d’années + ligues)
      annualTournamentSeeder, // Les éditions de tournois
      ParticipantSeeder,
      UserSeeder      // Les participants (besoin d’équipes + tournois)
            // Nationalités (besoin de joueurs + pays)
    ]);

    await em.flush();
    await this.call(em, [NationalitySeeder])

    console.log('✅ Seeding terminé avec succès !');
  }
}
