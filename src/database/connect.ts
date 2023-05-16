import { createConnections } from 'typeorm';
import { User } from '../entities/User';
import config from '../config/config';
async function connectToDatabase() {
    try {
      await createConnections([{
        type: "postgres",
        host: config.db_host,
        port: parseInt(config.db_port),
        username: config.db_user,
        password: config.db_password,
        database: config.db,
        synchronize: true,
        logging: false,
        entities: [User],
      }]);
  
      console.log("Connected to the database!");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }
  

export default connectToDatabase
