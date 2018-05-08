# Marvel API Wrapper

[![Build Status](https://travis-ci.org/danielsogl/marvel-api-wrapper.svg?branch=master)](https://travis-ci.org/danielsogl/marvel-api-wrapper)

A simple ready to run LoL API wrapper powered by [Express.js](http://expressjs.com/de/) and [TypeScript](https://www.typescriptlang.org)

## About

This repository allows you to use the official [LoL API](https://developer.riotgames.com) with some awesome features.

* Caching
* Simple configuration
* Only requests without another LoL Api library

## Setup

## Build

Because this repository is built in TypeScript you have to compile the `*.ts` files to plain JavaScript.
Run `npm run build` and the compiled `*.js` files are placed inside the `dist` folder.

## Deploy

I recommend using [Heroku](https://www.heroku.com) to deploy this repository because of nearly zero configuration and zero costs. Heroku also gives you the ability to use Redis as in-memory-database. The repository is already configured to run out of the box on Heroku.

## Test

I added basic unit tests to this repository. You find them inside the `./tests` folder. Feel free to add your own.
To run the tests just run `npm run tests`.
