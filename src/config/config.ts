import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  mongo_url: process.env['MONGO_URL'] || '',
  mongo_username: process.env['MONGO_USERNAME'] || '',
  mongo_password: process.env['MONGO_PASSWORD'] || '',
};

export default config;
