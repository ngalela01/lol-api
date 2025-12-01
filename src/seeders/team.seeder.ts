import { Seeder } from '@mikro-orm/seeder';
import { Team } from '../modules/team/entities/team.entity';
import { Country } from '../modules/country/entities/country.entity';
import { League } from '../modules/league/entities/league.entity';

export class TeamSeeder extends Seeder {
  async run(em) {
    const france = await em.findOneOrFail(Country, { name_country: 'France' });
    const germany = await em.findOneOrFail(Country, { name_country: 'Germany' });
    const spain = await em.findOneOrFail(Country, { name_country: 'Spain' });
    const angleterre = await em.findOneOrFail(Country, { name_country: 'United Kingdom' });
    const brazil = await em.findOneOrFail(Country, { name_country: 'Brazil' });
    const mexico = await em.findOneOrFail(Country, { name_country: 'Mexico' });
    const us = await em.findOneOrFail(Country, { name_country: 'United States' });
    const china = await em.findOneOrFail(Country, { name_country: 'China' });
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });
    const taiwan = await em.findOneOrFail(Country, { name_country: 'Taiwan' });
    const vietnam = await em.findOneOrFail(Country, { name_country: 'Vietnam' });
    const lec = await em.findOneOrFail(League, { short_name_league: 'LEC' });
    const lck = await em.findOneOrFail(League, { short_name_league: 'LCK' });
    const lta = await em.findOneOrFail(League, { short_name_league: 'LTA' });
    const lcp = await em.findOneOrFail(League, { short_name_league: 'LCP' });
    const lpl = await em.findOneOrFail(League, { short_name_league: 'LPL' });

    em.create(Team, {
      long_name_team: 'Karmine Corp',
      short_name_team: 'KC',
      creation_date: new Date('2020-11-16'),
      league: lec,
      country: france,
    });

    em.create(Team, {
      long_name_team: 'G2 Esports',
      short_name_team: 'G2',
      creation_date: new Date('2015-10-15'),
      league: lec,
      country: angleterre,
    });
    em.create(Team, {
      long_name_team: 'Movistar KOI',
      short_name_team: 'MKOI',
      creation_date: new Date('2011-03-14'),
      league: lec,
      country: spain,
    });
    em.create(Team, {
      long_name_team: 'Fnatic',
      short_name_team: 'FNC',
      creation_date: new Date('2004-07-23'),
      league: lec,
      country: germany,
    });

    em.create(Team, {
      long_name_team: 'T1',
      short_name_team: 'T1',
      creation_date: new Date('2019-12-08'),
      league: lck,
      country: korea,
    });
    em.create(Team, {
      long_name_team: 'Hanwha Life Esports',
      short_name_team: 'HLE',
      creation_date: new Date('2018-04-15'),
      league: lck,
      country: korea,
    });
    em.create(Team, {
      long_name_team: 'KT Rolster',
      short_name_team: 'KT',
      creation_date: new Date('2012-10-10'),
      league: lck,
      country: korea,
    });
    em.create(Team, {
      long_name_team: 'Gen.G',
      short_name_team: 'GEN',
      creation_date: new Date('2018-05-03'),
      league: lck,
      country: korea,
    });

    em.create(Team, {
      long_name_team: 'Top Esport',
      short_name_team: 'TES',
      creation_date: new Date('2017-12-21'),
      league: lpl,
      country: china,
    });
    em.create(Team, {
      long_name_team: 'Bilibili Gaming',
      short_name_team: 'BLG',
      creation_date: new Date('2017-12-17'),
      league: lpl,
      country: china,
    });
    em.create(Team, {
      long_name_team: "Anyone's Legend",
      short_name_team: 'AL',
      creation_date: new Date('2021-12-01'),
      league: lpl,
      country: china,
    });
    em.create(Team, {
      long_name_team: 'JD Gaming',
      short_name_team: 'JDG',
      creation_date: new Date('2017-05-20'),
      league: lpl,
      country: china,
    });

    em.create(Team, {
      long_name_team: 'FlyQuest',
      short_name_team: 'FLY',
      creation_date: new Date('2017-01-06'),
      league: lta,
      country: us,
    });
    em.create(Team, {
      long_name_team: 'Team Liquid',
      short_name_team: 'TL',
      creation_date: new Date('2015-01-06'),
      league: lta,
      country: us,
    });
    em.create(Team, {
      long_name_team: 'Vivo Keyd Stars',
      short_name_team: 'VKS',
      creation_date: new Date('2023-01-01'),
      league: lta,
      country: brazil,
    });
    em.create(Team, {
      long_name_team: 'LYON',
      short_name_team: 'LYON',
      creation_date: new Date('2024-10-31'),
      league: lta,
      country: mexico,
    });
    em.create(Team, {
      long_name_team: 'CTBC Flying Oyster',
      short_name_team: 'CFO',
      creation_date: new Date('2022-01-26'),
      league: lcp,
      country: taiwan,
    });
    em.create(Team, {
      long_name_team: 'GAM Esports',
      short_name_team: 'GAM',
      creation_date: new Date('2024-05-10'),
      league: lcp,
      country: vietnam,
    });
    em.create(Team, {
      long_name_team: 'Team Secret Whales',
      short_name_team: 'TSW',
      creation_date: new Date('2024-12-01'),
      league: lcp,
      country: vietnam,
    });
    em.create(Team, {
      long_name_team: 'PSG Talon',
      short_name_team: 'Talon',
      founded_at: new Date('2019-12-19'),
      league: lcp,
      country: taiwan,
    });
  }
}
