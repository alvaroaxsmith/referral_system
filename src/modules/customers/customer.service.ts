// customerService.ts
import Purchase from '../purchases/purchase.interface';
import Customer from './customer.interface';
import customerRepository from './customer.repository';

const getCustomersWithPoints = async (): Promise<Customer[]> => {
  return await customerRepository.getCustomersWithPoints();
};

const getIndicationPoints = async (personCode: string): Promise<number> => {
  return await customerRepository.getIndicationPoints(personCode);
};

const incrementIndicationPoints = async (personCode: string): Promise<void> => {
  await customerRepository.incrementIndicationPoints(personCode);
};

const getIndicationsForPerson = async (personCode: string): Promise<Purchase[]> => {
  return await customerRepository.getIndicationsForPerson(personCode);
};

export default {
  getCustomersWithPoints,
  getIndicationPoints,
  incrementIndicationPoints,
  getIndicationsForPerson,
};
