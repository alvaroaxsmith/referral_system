require('dotenv').config();
import mysql from 'mysql';

export const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectTimeout: 20000,
});

const connectToDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

connectToDatabase()
  .then(() => {
    console.log('Connected to MySQL as id ' + connection.threadId);
  })
  .catch((error) => {
    console.error('Error connecting to MySQL: ' + error.stack);
  });
