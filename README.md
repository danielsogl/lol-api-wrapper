# League of Legends API Wrapper

A ready to run LoL API wrapper powered by [Express.js](http://expressjs.com/de/) and [TypeScript](https://www.typescriptlang.org)

![LoL Logo](https://vignette.wikia.nocookie.net/leagueoflegends/images/8/86/League_of_legends_logo_transparent.png 'LoL API Wrapper')

[![Build Status](https://travis-ci.org/danielsogl/marvel-api-wrapper.svg?branch=master)](https://travis-ci.org/danielsogl/marvel-api-wrapper)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/danielsogl/lol-api-wrapper)

## About

This repository allows you to use the official [LoL API](https://developer.riotgames.com) with some awesome features.

* Caching
* Simple configuration
* Only requests without another LoL Api library

## Setup

To run the server you have to set following node environment variables. You can use the `.env.EXAMPLE` file to fill them out.

* `API_KEY`: Your League of Legends API Key. You can generate your own key [here](https://developer.riotgames.com)
* `CHAMPION_GG_KEY`: Your Champion.gg API Key. You can generate your own key [here](http://api.champion.gg)
* `DEFAULT_REGION`: The default API region (EUW, NA, TR etc.)
* `SESSION_SECRET`: The API Session private key. Just generate a random key

If you want to use redis without heroku you have to set the following key

* `REDIS_URL`: YOur redis endpoint url
* `CACHE_TYPE=redis`

## Build

Because this repository is built in TypeScript you have to compile the `*.ts` files to plain JavaScript.
Run `npm run build` and the compiled `*.js` files are placed inside the `dist` folder.

## Deploy

I recommend using [Heroku](https://www.heroku.com) to deploy this repository because of nearly zero configuration and zero costs. Heroku also gives you the ability to use Redis as in-memory-database. The repository is already configured to run out of the box on Heroku.

## Test

I added basic unit tests to this repository. You find them inside the `./tests` folder. Feel free to add your own.
To run the tests just run `npm run tests`.
