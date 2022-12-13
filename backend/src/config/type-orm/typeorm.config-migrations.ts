import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'mysql',
  port: parseInt(process.env.DB_PORT, 10),
  username: "root",
  password: "rl01111998",
  database: "database",
  entities: [__dirname + '/../../routes/**/entities/*.entity{.ts,.js}'],
};

const AppDataSource = new DataSource(dataSourceOptions)

export default AppDataSource;
