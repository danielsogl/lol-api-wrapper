import { middleware, options, getIndex } from 'apicache';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import redis from 'redis';

import * as apiController from './controllers/api';
import * as championController from './controllers/champion';
import * as championMasteryController from './controllers/champion-mastery';
import * as clearCacheController from './controllers/clear-cache';
import * as leagueController from './controllers/league.';
import * as staticDataController from './controllers/lol-static-data';
import * as statusController from './controllers/lol-status';
import * as matchController from './controllers/match';
import * as spectatorController from './controllers/spectator';
import * as summonerController from './controllers/summoner';
import * as thirdPartyController from './controllers/third-party-code';
import * as tournamentController from './controllers/tournament';
import * as tournamentStubController from './controllers/tournament-stub';
import { CACHE_TYPE, REDIS_URL } from './util/secrets';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Create Express server
const app = express();

// Create cache object
const cache = middleware;

// Configure cache
options({
  statusCodes: {
    exclude: [400, 401, 403, 404, 415, 429, 500, 503],
    include: [200, 201, 304]
  }
});

// Use Redis for Production builds
if (CACHE_TYPE === 'redis') {
  options({
    redisClient: redis.createClient(REDIS_URL)
  });
}

// Express configuration
app.set('port', process.env.PORT || 8080);
// Use CORS
app.use(cors());
// Secure the API with helmet. Read more: https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet());
// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.enable('trust proxy');
// Compress results
app.use(compression());

// Routes
app.get('/', apiController.getInfo);
app.get('/champion-masteries*', championMasteryController.handleRequest);
app.get('/champions*', cache('1 day'), championController.handleRequest);
app.get('/leagues*', leagueController.handleRequest);
app.get('/static-data*', cache('1 day'), staticDataController.handleRequest);
app.get('/status*', statusController.handleRequest);
app.get('/match*', matchController.handleRequest);
app.get('/spectator*', spectatorController.handleRequest);
app.get('/summoners*', cache('1 day'), summonerController.handleRequest);
app.get('/third-party-code*', thirdPartyController.handleRequest);
app.get('/tournament-stub*', tournamentStubController.handleRequest);
app.get('/tournament*', tournamentController.handleRequest);
app.get(
  '/clear-cache/summoner/:summonerId',
  clearCacheController.handleRequest
);

// add route to display cache index
app.get('/cache/index', (req, res) => {
  res.json(getIndex());
});

// Error Handling
app.use((req, res) => {
  res.status(404).json({
    error: 404,
    message: 'Not Found'
  });
});

app.use((req, res) => {
  res.status(500).json({
    error: 500,
    message: 'Internal Server Error'
  });
});

app.use((req, res) => {
  res.status(429).json({
    error: 429,
    message: 'Too many requests'
  });
});

// Export express app
export default app;
