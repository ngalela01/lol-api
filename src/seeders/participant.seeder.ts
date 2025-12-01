import { Seeder } from '@mikro-orm/seeder';
import { Participant, ParticipantRole } from '../modules/participant/entities/participant.entity';
import { Team } from '../modules/team/entities/team.entity';
import { AnnualTournament } from '../modules/annual-tournament/entities/annual-tournament.entity';


export class ParticipantSeeder extends Seeder {
  async run(em) {
    const g2 = await em.findOneOrFail(Team, { long_name_team: 'G2 Esports' });
    const t1 = await em.findOneOrFail(Team, { long_name_team: 'T1' });
    const worlds2024 = await em.findOneOrFail(AnnualTournament, { winner: 'T1' });
    const msi2024 = await em.findOneOrFail(AnnualTournament, { winner: 'Gen.G' });

em.create(Participant, {
  name: 'Rasmus',
  surname: 'Winther',
  pseudo: 'Caps',
  poste: 'mid',
  main_champion: 'Leblanc',
  role: ParticipantRole.PLAYER,
  team: g2,
  annualTournament: worlds2024,
  finalRank: 3,
  wins: 5,
  losses: 2,
});

em.create(Participant, {
  name: 'Lee',
  surname: 'Sang-hyeok',
  pseudo: 'Faker',
  poste: 'mid',
  main_champion: 'Ahri',
  role: ParticipantRole.PLAYER,
  team: t1,
  annualTournament: worlds2024,
  finalRank: 1,
  wins: 7,
  losses: 1,
});

em.create(Participant, {
  name: 'Steven',
  surname: 'Liv',
  pseudo: 'Bjergsen',
  poste: 'mid',
  main_champion: 'Syndra',
  role: ParticipantRole.COACH,
  team: g2,
  annualTournament: msi2024,
  finalRank: 2,
  wins: 6,
  losses: 3,
});


  }
}
