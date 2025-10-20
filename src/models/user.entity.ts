import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ nullable: true })
  email?: string;

  @Property({ defaultRaw: 'CURRENT_TIMESTAMP' })
  createdAt: Date  
}
