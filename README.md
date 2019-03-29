# Cafebot.js
  

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/DopeDealers/Cafebot.js/graphs/commit-activity)

## Installation

**NPM**
``npm i cafebot``

**YARN**
``soon pls dont hurt me``


## Client

The Client for connecting to the API:

|Client          |Options                        |                        
|----------------|-------------------------------|
|token           |`'cafebot_token'`              |
|log             |`true || false`                |
|beautyConsole   |`true || false || null`        |

**Setup**
```js
const  CafeC  =  require('cafebot.js');

const  cafe  =  new  CafeC.Client('token here');
```

##Get a user profile

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

