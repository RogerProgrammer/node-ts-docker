import { DataSource } from 'typeorm';
import { User } from '../models/user';

class Database {

  public static createDataSource() {
    return new DataSource({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //logging: true,
      entities: [User],
      synchronize: true
    });
  }
}

export default Database;