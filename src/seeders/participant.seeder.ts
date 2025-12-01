import { Seeder } from '@mikro-orm/seeder';
import { Participant, ParticipantRole } from '../modules/participant/entities/participant.entity';
import { Team } from '../modules/team/entities/team.entity';
import { AnnualTournament } from '../modules/annual-tournament/entities/annual-tournament.entity';


export class ParticipantSeeder extends Seeder {
  async run(em) {
    const g2 = await em.findOneOrFail(Team, { long_name_team: 'G2 Esports' });
    const t1 = await em.findOneOrFail(Team, { long_name_team: 'T1' });
    const kc = await em.findOneOrFail(Team, { long_name_team: 'Karmine Corp' });
em.create(Participant, {
  name: 'Rasmus',
  surname: 'Winther',
  pseudo: 'Caps',
  birth_date: '1999-11-17' ,
  poste: 'mid',
  main_champion: 'Leblanc',
  role: ParticipantRole.PLAYER,
  team: g2,
});
em.create(Participant, {
  name: 'Sergen',
  surname: 'Çelik',
  pseudo: 'BrokenBlade',
  birth_date: '1998-07-04',
  poste: 'top',
  main_champion: 'Riven', // tu peux ajouter
  role: ParticipantRole.PLAYER,
  team: g2,
});

em.create(Participant, {
  name: 'Lee',
  surname: 'Sang-hyeok',
  pseudo: 'Faker',
  birth_date:'1996-05-07' ,
  poste: 'mid',
  main_champion: 'Ahri',
  role: ParticipantRole.PLAYER,
  team: t1,
});

em.create(Participant, {
  name: 'Dylan',
  surname: 'Falco',
  pseudo: 'Dylan Falco',
  birth_date: '1985-03-05' ,
  role: ParticipantRole.COACH,
  team: g2,
});

em.create(Participant, {
  name: 'Kim',
  surname: 'Chang-dong',
  pseudo: 'Canna',
  birth_date: '1999-11-21',
  poste: 'top',
  main_champion: 'Jayce',
  role: ParticipantRole.PLAYER,
  team: kc,
});
em.create(Participant, {
  name: 'Martin',
  surname: 'Sundelin',
  pseudo: 'Yike',
  birth_date: '2001-01-22',
  poste: 'jungle',
  main_champion: 'Viego',
  role: ParticipantRole.PLAYER,
  team: kc,
});
em.create(Participant, {
  name: 'Caliste',
  surname: 'Henry‑Hennebert',
  pseudo: 'Caliste',
  birth_date: '2005-04-03',
  poste: 'adc',
  main_champion: 'Draven',
  role: ParticipantRole.PLAYER,
  team: kc,
});
em.create(Participant, {
  name: 'Alan',
  surname: 'Cwalina',
  pseudo: 'Busio',
  birth_date: '2003-09-12',
  poste: 'support',
  main_champion: 'Pyke',
  role: ParticipantRole.PLAYER,
  team: kc,
});
em.create(Participant, {
  name: 'Bok',
  surname: 'Han-gyu',
  pseudo: 'Reapered',
  birth_date: '1985-09-09',
  role: ParticipantRole.COACH,
team: kc,
});

  }
}
