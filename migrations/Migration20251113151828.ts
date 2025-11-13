import { Migration } from '@mikro-orm/migrations';

export class Migration20251113151828 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`Country\` (\`id_country\` text not null, \`name_country\` text not null, \`code_iso\` text not null, primary key (\`id_country\`));`);
    this.addSql(`create unique index \`Country_name_country_unique\` on \`Country\` (\`name_country\`);`);
    this.addSql(`create unique index \`Country_code_iso_unique\` on \`Country\` (\`code_iso\`);`);

    this.addSql(`create table \`Region\` (\`id_region\` text not null, \`name_region\` text not null, primary key (\`id_region\`));`);
    this.addSql(`create unique index \`Region_name_region_unique\` on \`Region\` (\`name_region\`);`);

    this.addSql(`create table \`League\` (\`id_league\` text not null, \`name_league\` text not null, \`region_id_region\` text not null, constraint \`League_region_id_region_foreign\` foreign key(\`region_id_region\`) references \`Region\`(\`id_region\`) on update cascade, primary key (\`id_league\`));`);
    this.addSql(`create unique index \`League_name_league_unique\` on \`League\` (\`name_league\`);`);
    this.addSql(`create index \`League_region_id_region_index\` on \`League\` (\`region_id_region\`);`);

    this.addSql(`create table \`Team\` (\`id_team\` text not null, \`long_name_team\` text not null, \`short_name_team\` text not null, \`creation_date\` datetime null, \`country_id_country\` text not null, \`league_id_league\` text not null, constraint \`Team_country_id_country_foreign\` foreign key(\`country_id_country\`) references \`Country\`(\`id_country\`) on update cascade, constraint \`Team_league_id_league_foreign\` foreign key(\`league_id_league\`) references \`League\`(\`id_league\`) on update cascade, primary key (\`id_team\`));`);
    this.addSql(`create unique index \`Team_long_name_team_unique\` on \`Team\` (\`long_name_team\`);`);
    this.addSql(`create unique index \`Team_short_name_team_unique\` on \`Team\` (\`short_name_team\`);`);
    this.addSql(`create index \`Team_country_id_country_index\` on \`Team\` (\`country_id_country\`);`);
    this.addSql(`create index \`Team_league_id_league_index\` on \`Team\` (\`league_id_league\`);`);

    this.addSql(`create table \`Participant\` (\`id_participant\` text not null, \`pseudo\` text not null, \`name\` text not null, \`surname\` text not null, \`birth_date\` datetime null, \`role\` text null, \`main_champion\` text null, \`team_id_team\` text not null, constraint \`Participant_team_id_team_foreign\` foreign key(\`team_id_team\`) references \`Team\`(\`id_team\`) on update cascade, primary key (\`id_participant\`));`);
    this.addSql(`create index \`Participant_team_id_team_index\` on \`Participant\` (\`team_id_team\`);`);

    this.addSql(`create table \`Player\` (\`id_participant\` text not null, \`participant_id_participant\` text not null, \`player_role\` text null, \`main_champion\` text null, constraint \`Player_participant_id_participant_foreign\` foreign key(\`participant_id_participant\`) references \`Participant\`(\`id_participant\`) on delete cascade on update cascade, primary key (\`id_participant\`));`);
    this.addSql(`create unique index \`Player_participant_id_participant_unique\` on \`Player\` (\`participant_id_participant\`);`);

    this.addSql(`create table \`Nationality\` (\`id_nationality\` text not null, \`country_id_country\` text not null, \`participant_id_participant\` text not null, constraint \`Nationality_country_id_country_foreign\` foreign key(\`country_id_country\`) references \`Country\`(\`id_country\`) on update cascade, constraint \`Nationality_participant_id_participant_foreign\` foreign key(\`participant_id_participant\`) references \`Participant\`(\`id_participant\`) on update cascade, primary key (\`id_nationality\`));`);
    this.addSql(`create index \`Nationality_country_id_country_index\` on \`Nationality\` (\`country_id_country\`);`);
    this.addSql(`create index \`Nationality_participant_id_participant_index\` on \`Nationality\` (\`participant_id_participant\`);`);

    this.addSql(`create table \`Coach\` (\`id_participant\` text not null, \`participant_id_participant\` text not null, constraint \`Coach_participant_id_participant_foreign\` foreign key(\`participant_id_participant\`) references \`Participant\`(\`id_participant\`) on delete cascade on update cascade, primary key (\`id_participant\`));`);
    this.addSql(`create unique index \`Coach_participant_id_participant_unique\` on \`Coach\` (\`participant_id_participant\`);`);

    this.addSql(`create table \`Tournament\` (\`id_tournament\` text not null, \`long_name_tournament\` text not null, \`short_name_tournament\` text not null, primary key (\`id_tournament\`));`);
    this.addSql(`create unique index \`Tournament_long_name_tournament_unique\` on \`Tournament\` (\`long_name_tournament\`);`);
    this.addSql(`create unique index \`Tournament_short_name_tournament_unique\` on \`Tournament\` (\`short_name_tournament\`);`);

    this.addSql(`create table \`Years\` (\`id_years\` text not null, \`year\` integer not null, primary key (\`id_years\`));`);

    this.addSql(`create table \`Annual_Tournament\` (\`id_years\` text not null, \`id_tournament\` text not null, \`year_id_years\` text not null, \`tournament_id_tournament\` text not null, \`country_id_country\` text null, \`date_beginning\` datetime null, \`date_end\` datetime null, \`winner\` text null, constraint \`Annual_Tournament_year_id_years_foreign\` foreign key(\`year_id_years\`) references \`Years\`(\`id_years\`) on update cascade, constraint \`Annual_Tournament_tournament_id_tournament_foreign\` foreign key(\`tournament_id_tournament\`) references \`Tournament\`(\`id_tournament\`) on update cascade, constraint \`Annual_Tournament_country_id_country_foreign\` foreign key(\`country_id_country\`) references \`Country\`(\`id_country\`) on delete set null on update cascade, primary key (\`id_years\`, \`id_tournament\`));`);
    this.addSql(`create index \`Annual_Tournament_year_id_years_index\` on \`Annual_Tournament\` (\`year_id_years\`);`);
    this.addSql(`create index \`Annual_Tournament_tournament_id_tournament_index\` on \`Annual_Tournament\` (\`tournament_id_tournament\`);`);
    this.addSql(`create index \`Annual_Tournament_country_id_country_index\` on \`Annual_Tournament\` (\`country_id_country\`);`);

    this.addSql(`create table \`Annual_League\` (\`id_years\` text not null, \`id_league\` text not null, \`year_id_years\` text not null, \`league_id_league\` text not null, \`country_id_country\` text null, \`date_beginning\` datetime null, \`date_end\` datetime null, \`winner\` text null, constraint \`Annual_League_year_id_years_foreign\` foreign key(\`year_id_years\`) references \`Years\`(\`id_years\`) on update cascade, constraint \`Annual_League_league_id_league_foreign\` foreign key(\`league_id_league\`) references \`League\`(\`id_league\`) on update cascade, constraint \`Annual_League_country_id_country_foreign\` foreign key(\`country_id_country\`) references \`Country\`(\`id_country\`) on delete set null on update cascade, primary key (\`id_years\`, \`id_league\`));`);
    this.addSql(`create index \`Annual_League_year_id_years_index\` on \`Annual_League\` (\`year_id_years\`);`);
    this.addSql(`create index \`Annual_League_league_id_league_index\` on \`Annual_League\` (\`league_id_league\`);`);
    this.addSql(`create index \`Annual_League_country_id_country_index\` on \`Annual_League\` (\`country_id_country\`);`);
  }

}
