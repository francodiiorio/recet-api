import { Sequelize } from 'sequelize';
import "dotenv/config";


const connection = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default connection;
