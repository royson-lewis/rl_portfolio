import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../../routes/**/entities/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
};

const datasource = new DataSource(dataSourceOptions);

export default datasource;
