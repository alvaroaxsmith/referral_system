// customerRepository.ts
import { connection } from '../../configurations/database';
import Customer from './customer.interface';
import Purchase from '../purchases/purchase.interface';

const getCustomersWithPoints = async (): Promise<Customer[]> => {
  const query = `
    SELECT person_code, person_name, COUNT(indication_code) as points
    FROM purchases
    WHERE indication_code IS NOT NULL
    GROUP BY person_code
    ORDER BY points DESC;
  `;
  return new Promise<Customer[]>((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getIndicationPoints = async (personCode: string): Promise<number> => {
  const query: string = `
    SELECT COUNT(indication_code) as points
    FROM purchases
    WHERE person_code = ? AND indication_code IS NOT NULL;
  `;
  return new Promise<number>((resolve, reject) => {
    connection.query(query, [personCode], (error: Error | null, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result[0]?.points || 0);
      }
    });
  });
};

const incrementIndicationPoints = async (personCode: string): Promise<void> => {
  const query = `
    UPDATE purchases
    SET indication_code = indication_code + 1
    WHERE person_code = ?;
  `;
  return new Promise<void>((resolve, reject) => {
    connection.query(query, [personCode], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

const getIndicationsForPerson = async (personCode: string): Promise<Purchase[]> => {
  const query = `
    SELECT person_code, product_name, dtBuy, indication_code
    FROM purchases
    WHERE person_code = ? AND indication_code IS NOT NULL;
  `;
  return new Promise<Purchase[]>((resolve, reject) => {
    connection.query(query, [personCode], (error, result: Purchase[]) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export default { getCustomersWithPoints, getIndicationPoints, incrementIndicationPoints, getIndicationsForPerson };
