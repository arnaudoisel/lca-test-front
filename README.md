# Chat

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [How to use](#how-to-use)
* [Usage](#usage)
* [Build](#build)
* [Running unit tests](#running-unit-tests)
* [Running end-to-end tests](#running-end-to-end-test)
* [Production](#production)

## General info
Front-end test. Two people chatting together.

## Technologies
Project is created with:
* Angular 10

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/arnaudoisel/lca-test-front

# Go into the repository
$ cd lca-test-front

# Install dependencies
$ npm install

# Run the app
$ npm start
```
Navigate to `http://localhost:4200/`.

## Build

```bash
# Build the app
$ npm build
```
The build artifacts will be stored in the `dist/` directory.

Use the `--prod` flag for a production build.

```bash
# Build the app for production
$ npm build --prod
```

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Production

A prod version of the app is deployed here :

https://arnaudoisel.github.io/lca-test-front/

