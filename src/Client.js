const EventEmitter = require('events').EventEmitter;
const w = require('wumpfetch');
const chalk = require('chalk');
/**
 * @extends EventEmitter Represents a UwU
 * @prop {String} token The token of the client
 * @prop {Object} [options] Options for the apiClient
 * */
module.exports = class Reddit extends EventEmitter {
    /**
     * 
     * @arg {String} token 
     * @arg {Object} options 
     */
    constructor(token, options) {
        super();
        this.token = token;

        this.options = Object.assign({
            log: false,
            beautyConsole: null
        } & options);
        Object.freeze(this.options);
        if (!this.token) return console.log(`${chalk.default.black("[")}${chalk.default.greenBright("CafeBot")}${chalk.default.black("]")} ${chalk.default.bgBlueBright("No token found!")}`);
    };
    async profile(userid) {
        if (!userid) return console.log("ERROR");
        // thanks to https://github.com/auguwu/ good friend of mine for helping me fix
        const r = await w({
            url: `https://cafebot.xyz/api/profile/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            username: r.json().username,
            discriminator: r.json().discriminator,
            supporterlvl: r.json().supporterlvl,
            lastvotems: r.json().lastvotems,
            rebirths: r.json().rebirths,
            cps: r.json().cps,
            cpm: r.json().cpm,
            userid: r.json().userid,
            cash: r.json().cash,
            collectivecash: r.json().collectivecash,
            tokens: r.json().tokens,
            gems: r.json().gems,
            purchases: r.json().purchases,
            upgrades: r.json().upgrades,
            description: r.json().description,
            error: r.json().error
        }
    };
    async voted(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/voted/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            voted: r.json().voted,
            voteMs: r.json().voteMs,
            error: r.json().error
        }
    };
    async active(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/active/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            lastMs: r.json().lastMs,
            active: r.json().active,
            error: r.json().error
        }
    }
    async team(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/team/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
                return {
                    id: r.json().id,
                    name: r.json().name,
                    motd: r.json().motd,
                    ownerId: r.json().motd,
                    ownerName: r.json().ownerName,
                    slotsFilled: r.json().slotsFilled,
                    slotsMax: r.json().slotsMax,
                    level: r.json().level,
                    status: r.json().status,
                    publicinvite: r.json().publicinvite,
                    error: r.json().error
                }
     }
    
    async prices(userid, amount) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/prices/${userid}/${amount}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {brewer: r.json().Brewer}        
    }
    async purchased(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/purchased/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {temp: "fix methods"}        
    }
    async garden(userid, amount) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/garden/${userid}/${amount}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {temp: "fix methods"}        
    }
};