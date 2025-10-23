import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;
}
