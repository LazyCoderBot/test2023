import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db:process.env.DB,
  db_port:process.env.DB_PORT,
  db_host:process.env.DB_HOST
};

export default config;
