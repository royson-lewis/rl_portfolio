import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../../routes/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../database/migrations/*.ts'],
};

const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;
