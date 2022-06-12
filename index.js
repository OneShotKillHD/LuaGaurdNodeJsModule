const axios = require('axios');

const luag = class {
    constructor(apiKey) {
       this.apiKey = apiKey;
       this.url = 'https://api.luawl.com/';
      
    };
 
    /*
    async connect(apiKey) {
       const request = await axios({
          url: this.url + 'getAccountScripts.php',
          method: 'post',
          data: { 'token': apiKey }
       });
 
       if (request.data.error === 'Missing required data.') throw new Error('An invalid api key was provided.');
       if (request.data.error === 'Error has occured fetching scripts.') throw new Error('Your account does not have any scripts attatched to it.');
       this.apiKey = apiKey;
    };
    */
    
    async whitelistUser(discord_id) {
       const request = await axios({
          url: this.url + 'whitelistUser.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async getKeyByDiscord(discord_id) {
       const request = await axios({
          url: this.url + 'getKey.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async getKeyByKey(key) {
       const request = await axios({
          url: this.url + 'getKey.php',
          method: 'post',
          data: { 'token': this.apiKey, 'key': key }
       });
       return request.data;
    };
 
    async resetHWIDByDiscord(discord_id) {
       const request = await axios({
          url: this.url + 'resetHWID.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async resetHWIDByKey(key) {
       const request = await axios({
          url: this.url + 'resetHWID.php',
          method: 'post',
          data: { 'token': this.apiKey, 'key': key }
       });
       return request.data;
    };
 
    async disableKeyByDiscord(discord_id) {
       const request = await axios({
          url: this.url + 'disableKey.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async disableKeyByKey(key) {
       const request = await axios({
          url: this.url + 'disableKey.php',
          method: 'post',
          data: { 'token': this.apiKey, 'key': key }
       });
       return request.data;
    };
 
    async createBlacklistByDiscord(discord_id) {
       const request = await axios({
          url: this.url + 'createBlacklist.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async createBlacklistByKey(key) {
       const request = await axios({
          url: this.url + 'createBlacklist.php',
          method: 'post',
          data: { 'token': this.apiKey, 'key': key }
       });
       return request.data;
    };
 
    async removeBlacklistByDiscord(discord_id) {
       const request = await axios({
          url: this.url + 'removeBlacklist.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async removeBlacklistByKey(key) {
       const request = await axios({
          url: this.url + 'removeBlacklist.php',
          method: 'post',
          data: { 'token': this.apiKey, 'key': key }
       });
       return request.data;
    };
 
    async isOnCooldown(discord_id) {
       const request = await axios({
          url: this.url + 'isOnCooldown.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async removeCooldown(discord_id) {
       const request = await axios({
          url: this.url + 'removeCooldown.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
    async getAccountScripts(discord_id) {
       const request = await axios({
          url: this.url + 'getAccountScripts.php',
          method: 'post',
          data: { 'token': this.apiKey, 'discord_id': discord_id }
       });
       return request.data;
    };
 
 };

 module.exports = luag;