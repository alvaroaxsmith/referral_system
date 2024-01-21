import { connection } from '../../configurations/database';
import Purchase from './purchase.interface';

const insertPurchase = async (productName: string, personName: string, indicationCode: string): Promise<Purchase> => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO purchases (product_name, person_name, indication_code) VALUES (?, ?, ?)';
    connection.query(query, [productName, personName, indicationCode], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export default { insertPurchase };
