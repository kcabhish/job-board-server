import knex from 'knex';

/**
 * Connection is made via knex so that the knex query builder can be used
 * as ORM in files likejob.js and company.js
 */
export const connection = knex({
  client: 'better-sqlite3',
  connection: {
    filename: './data/db.sqlite3',
  },
  useNullAsDefault: true,
});
