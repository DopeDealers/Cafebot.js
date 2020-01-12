# Cafebot.js
  
CAFEBOT.JS OFFICIAL WRAPPER

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/DopeDealers/Cafebot.js/graphs/commit-activity) 
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

## About

This is a wrapper for the api of the bot named Cafe, visit or invite it [here](https://cafe.ajnicoloff.me/)
this project will be maintained per every endpoint or bug found. please create an issue
for us to track or fix.

Join official Cafe Discord [here](https://discordapp.com/invite/DxP2He9)

## Installation

**NPM**
``npm i cafebot.js``

**Yarn**
``yarn add cafebot.js``


## Client

The Client for connecting to the API:

|Client          |Options                        |                        
|----------------|-------------------------------|
|token           |``'cafebot_token'``            |
|disableLogs     | ``true or false``             |

**JS Setup**
```js
const { Client } = require('cafebot.js');

const c = new Client('token here');
```

## Get a user profile

```js
// ES6 promise
const { Client } = require('cafebot.js');

const cafe = new Client('token here').profile('discorduserid');

cafe.then(user => {
    console.log(user);
//Will output all profile data
});
```

## Check if a user has voted

```js
// Asynchronous promise
const {Client} = require('cafebot.js');
// also removes logging
const cafe = new Client('token here', {disableLogs: true});

const Hello = await cafe.vote("discorduserid");

console.log(Hello);
//Will output a boolean, vote time, or an error.
```

# There's more methods, but all of them follow the same style, and are appropriately not listed - for length purposes.

## Known Bugs

| Client    |                                                             |
|-----------|-------------------------------------------------------------|
|None!      |                                                             |