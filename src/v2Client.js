'use strict';
const { version, name } = require('../package.json');
const w = require('wumpfetch');
const Util = require("./utils/Util");
const http = require("http");
const _n = require('./utils/Logging'), logging = new _n();
const { cdns } = require("./utils/Links");
const { EventEmitter } = require('events');

class Cafe extends EventEmitter {
    /**Cafe api key for future usage.
     * @extends EventEmitter Extending the usage of events for team leaving/joining etc.
     * @param {string} key API key for cafebot.xyz/api
     * @param {Object} [options={}] Optional options for caching and warnings
     * @param {boolean} [options.disableLogs=false] Whether to suppress logging
     * @param {number} [port] port to post events to, not needed if you dont wana use the server feature.
     * @param {string} [path=/] The path to accept requests on
     */
    constructor(key, { port, path = '/', disableLogs = false, disableLE = false, base = cdns.baseLink } = {}) {
        super();
        this._key = key;
        this.baseLink = base;
        this.headers = {
            'User-Agent': `CafeApi/${version} (https://www.npmjs.com/package/${name})`,
            'Authorization': this._key
        };
        this.options = { port, path, disableLogs, disableLE };
        if (!key) return logging.yes(`Please provide an API key.`, {disableLogs: this.options.disableLogs, type: 'error'});
    };
    async profile(userid) {
        if (!this._key) return;
        if (!userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}profile/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async voted(userid) {
        if (!this._key) return;
        if (!userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}voted/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async seen(userid) {
        if (!this._key) return;
        if (!userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}seen/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async active(userid) {
        if (!this._key) return;
        if (!userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}active/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async purchased(userid) {
        if (!this._key) return;
        if (!userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}purchased/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async prices(userid, amount) {
        if (!this._key) return;
        if (!amount || !userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}prices/${userid}/${amount}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
    async cp(userid) {
        if (!this._key) return;
        if (!amount || !userid) return logging.yes(`No userID`, {disableLogs: this.options.disableLogs, type: 'warn'});
        const r = await w({
            url: `${this.baseLink}cp/${userid}`,
            method: 'GET',
            headers: this.headers
        }).send();
        return r.json();
    }
};



module.exports = Cafe;