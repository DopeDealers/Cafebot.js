# Cafebot.js
  
CAFEBOT.JS OFFICIAL WRAPPER

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/DopeDealers/Cafebot.js/graphs/commit-activity) 
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

## About

This is a wrapper for the api of the bot named Cafe, visit or invite it [here](https://cafebot.xyz)
this project will be maintained per every endpoint or bug found. please create an issue
for us to track or fix.

Join official Cafe Discord [here](https://discordapp.com/invite/CfCQKGK)

## Installation

**NPM**
``npm i cafebot``

**Yarn**
``yarn add cafebot``


## Client

The Client for connecting to the API:

|Client          |Options                        |                        
|----------------|-------------------------------|
|token           |``'cafebot_token'``            |
|log             |``true or false``              |
|beautyConsole   |``true or false or null``      |

**Setup**
```js
const  CafeC  =  require('cafebot.js');

const  cafe  =  new  CafeC.Client('token here');
```

## Get a user profile

```js
const CafeC = require('cafebot.js');

const cafe = new CafeC.Client('token here').profile('discorduserid');

cafe.then(user => {
    console.log(user);
});
```

**or**

```js
const CafeC = require('cafebot.js');

const cafe = new CafeC.Client('token here');

const profile = cafe.profile('discorduserid');

profile.then(user => {
    console.log(user);
});
```

## Known Bugs

| Client    |                                                             |
|-----------|-------------------------------------------------------------|
|options    | returns null and logging isnt setup                         |

