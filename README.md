# LuaGaurd
luaGuard Whitelist is a server based authentication system

(I am not the original dev of this I just made a nodejs module for it.)
## Features

- Multiple layers of security
- Api
- Supports most executors
- Discord webhook support
- Script generator

## Installation

LuaGaurd requires [Node.js](https://nodejs.org/) v10+ to run.

Install LuaGaurd
```sh
npm i luagaurd
```

## How to Setup
```js
const luagaurdApi = require('luagaurd');
const luagaurd = new luagaurdApi('your api token');

```

## How to Whitelist A User

```js
(async () => { // Example async function
    const userKey = await luagaurd.whitelistUser('discord id');
    console.log(userKey); 
    // Or whatever you want todo with the key.
})();
```

## How To Get Key Details
```js
(async () => { // Example async function
    // You can get a key's datails with a discord id or a key
    
    // how to get key details with a discord id
    const keyDetails = await luagaurd.getKeyByDiscord('discord id');
    // how to get key details with their key
    const keyDetails = await luagaurd.getKeyByKey('key here');
    
    console.log(keyDetails)
    // Or whatever you want todo with the infomation
})();
```

## How To Reset A HWID
```js
    // You can reset a HWID with a discord id or a key
    
    // how to reset a HWID with a discord id
    luagaurd.resetHWIDByDiscord('discord id');
    
    // how to reset a HWID with a key
    luagaurd.resetHWIDByKey('key');
```

## How To Disable A Key
```js
    // You can disable a key with a discord id or a key

    // how to disable a key with a discord id
    luagaurd.disableKeyByDiscord('discord id');
    
    // how to disable a key with a key
    luagaurd.disableKeyByKey('key');
```

## How To Blacklist A Key
```js
    // you can blacklist a key with a discord id or key
    
    // how to blacklist a key with a discord id
    luagaurd.createBlacklistByDiscord('discord id');
    
    // how to blacklist a key with a key
    luagaurd.createBlacklistByKey('key');
```

## How To Remove A Key Blacklist
```js
    // you can remove a key blacklist with a discord id or key
    
    // how to remove a key blacklist with a discord id
    luagaurd.removeBlacklistByDiscord('discord id');
    
    // how to remove a key blacklist with a key
    luagaurd.removeBlacklistByKey('key');
```

## How To Check If Someone Is On Cooldown
```js
    // you can check if someone is on cooldown with a discord id
    
    (async () => { // Example async function
        const cooldown = await luagaurd.isOnCooldown('discord id');
        console.log(cooldown);
        // or whatever you want todo with the cooldown
    })();
```

## How To Remove A Cooldown
```js
    // you can remove a cooldown with a discord id
    
    luagaurd.removeCooldown('discord id');
```

## How To Get Account Scripts
```js
    (async () => { // Example async function
        const scripts = await luagaurd.getAccountScripts();
        console.log(scripts);
        // or whatever you want todo with the scripts
    })();
```