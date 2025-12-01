import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'User' })
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property({ onCreate: () => new Date() })
  createdAt ?: Date;
}

