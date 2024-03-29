import { connection } from './connection.js';

const getCompanyTable = () => connection.table('company');

export async function getCompanies() {
  return await getCompanyTable().select();
}
export async function getCompany(id) {
  return await getCompanyTable().first().where({ id });
}
