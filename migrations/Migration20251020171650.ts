import { Migration } from '@mikro-orm/migrations';

export class Migration20251020171650 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`user\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`email\` text null, \`created_at\` datetime not null default CURRENT_TIMESTAMP);`);
  }

}
