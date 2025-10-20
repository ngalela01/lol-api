import { MikroORM } from '@mikro-orm/core';
const config = require('./mikro-orm.config').default;
let orm: MikroORM | null = null;

export async function initORM() {
  if (!orm) {
    orm = await MikroORM.init(config);
    console.log('✅ MikroORM initialisé');
  }
  return orm;
}

export function getORM(): MikroORM {
  if (!orm) {
    throw new Error('MikroORM non initialisé. Appelle initORM() d’abord.');
  }
  return orm;
}
