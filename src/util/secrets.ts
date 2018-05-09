import dotenv from 'dotenv';
import fs from 'fs';

import logger from './logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const API_KEY = process.env['API_KEY'];
export const DEFAULT_REGION = process.env['DEFAULT_REGION'] || 'euw';
export const CACHE_TYPE = process.env['CACHE_TYPE'] || 'memory';
export const REDIS_URL = process.env['REDIS_URL'];
export const SESSION_SECRET = process.env['SESSION_SECRET'];

if (!API_KEY) {
  logger.error('No api key. Set API_KEY environment variable.');
  process.exit(1);
}

if (!SESSION_SECRET) {
  logger.error('No session secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}
