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
    };
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
    };
    async prices(userid, amount) {
        if (!userid) return console.log("ERROR");
        if (!amount) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/prices/${userid}/${amount}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            Brewer: r.json().Brewer,
            Grinder: r.json().Grinder,
            Shelving: r.json().Shelving,
            Wifi: r.json().Wifi,
            IceMachine: r.json().IceMachine,
            Blender: r.json().Blender,
            Table: r.json().Table,
            Dishwasher: r.json().Dishwasher,
            Seat: r.json().Seat,
            Espresso: r.json().Espresso,
            Boiler: r.json().Boiler,
            Wastebin: r.json().Wastebin,
            Refrigerator: r.json().Refrigerator,
            Infuser: r.json().Infuser,
            Sofa: r.json().Sofa,
            Dispenser: r.json().Dispenser,
            Creamer: r.json().Creamer,
            Press: r.json().Press,
            Pitcher: r.json().Pitcher,
            Urn: r.json().Urn,
            Airpot: r.json().Airpot,
            Sleeveholder: r.json().SleeveHolder,
            Warmers: r.json().Warmers,
            Spigot: r.json().Spigot,
            Juicer: r.json().Juicer,
            Teapot: r.json().Teapot,
            Pump: r.json().Pump,
            Delivery: r.json().Delivery,
            Grill: r.json().Grill,
            KnockBox: r.json().KnockBox,
            Toaster: r.json().Toaster,
            Oven: r.json().Oven,
            Microwave: r.json().Microwave,
            Farm: r.json().Farm,
            Transport: r.json().Transport,
            Solar: r.json().Solar,
            Radio: r.json().Radio,
            Messenger: r.json().Messenger,
            Mailbox: r.json().Mailbox,
            Folders: r.json().Folders,
            Catering: r.json().Catering,
            Optimist: r.json().Optimist,
            Shipment: r.json().Shipment,
            Swirl: r.json().Swirl,
            Monopoly: r.json().Monopoly,
            Hired: r.json().Hired,
            Lovely: r.json().Lovely,
            Decaffeinated: r.json().Decaffeinated,
            Caffeinated: r.json().Caffeinated,
            error: r.json().error
        }
    };
    async purchased(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/purchased/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            Brewer: {
                owned: r.json().Brewer.owned,
                cps: r.json().Brewer.cps
            },
            Grinder: {
                owned: r.json().Grinder.owned,
                cps: r.json().Grinder.cps
            },
            Shelving: {
                owned: r.json().Shelving.owned,
                cps: r.json().Shelving.cps
            },
            Wifi: {
                owned: r.json().Wifi.owned,
                cps: r.json().Wifi.cps
            },
            IceMachine: {
                owned: r.json().IceMachine.owned,
                cps: r.json().IceMachine.cps
            },
            Blender: {
                owned: r.json().Blender.owned,
                cps: r.json().Blender.cps
            },
            Table: {
                owned: r.json().Table.owned,
                cps: r.json().Table.cps
            },
            Dishwasher: {
                owned: r.json().Dishwasher.owned,
                cps: r.json().Dishwasher.cps
            },
            Seat: {
                owned: r.json().Seat.owned,
                cps: r.json().Seat.cps
            },
            Espresso: {
                owned: r.json().Espresso.owned,
                cps: r.json().Espresso.cps
            },
            Boiler: {
                owned: r.json().Boiler.owned,
                cps: r.json().Boiler.cps
            },
            Wastebin: {
                owned: r.json().Wastebin.owned,
                cps: r.json().Wastebin.cps
            },
            Refrigerator: {
                owned: r.json().Refrigerator.owned,
                cps: r.json().Refrigerator.cps
            },
            Infuser: {
                owned: r.json().Infuser.owned,
                cps: r.json().Infuser.cps
            },
            Sofa: {
                owned: r.json().Sofa.owned,
                cps: r.json().Sofa.cps
            },
            Dispenser: {
                owned: r.json().Dispenser.owned,
                cps: r.json().Dispenser.cps
            },
            Creamer: {
                owned: r.json().Creamer.owned,
                cps: r.json().Creamer.cps
            },
            Press: {
                owned: r.json().Press.owned,
                cps: r.json().Press.cps
            },
            Pitcher: {
                owned: r.json().Pitcher.owned,
                cps: r.json().Pitcher.cps
            },
            Urn: {
                owned: r.json().Urn.owned,
                cps: r.json().Urn.cps
            },
            Airpot: {
                owned: r.json().Airpot.owned,
                cps: r.json().Airpot.cps
            },
            Sleeveholder: {
                owned: r.json().SleeveHolder.owned,
                cps: r.json().SleeveHolder.cps
            },
            Warmers: {
                owned: r.json().Warmers.owned,
                cps: r.json().Warmers.cps
            },
            Spigot: {
                owned: r.json().Spigot.owned,
                cps: r.json().Spigot.cps
            },
            Juicer: {
                owned: r.json().Juicer.owned,
                cps: r.json().Juicer.cps
            },
            Teapot: {
                owned: r.json().Teapot.owned,
                cps: r.json().Teapot.cps
            },
            Pump: {
                owned: r.json().Pump.owned,
                cps: r.json().Pump.cps
            },
            Delivery: {
                owned: r.json().Delivery.owned,
                cps: r.json().Delivery.cps
            },
            Grill: {
                owned: r.json().Grill.owned,
                cps: r.json().Grill.cps
            },
            KnockBox: {
                owned: r.json().KnockBox.owned,
                cps: r.json().KnockBox.cps
            },
            Toaster: {
                owned: r.json().Toaster.owned,
                cps: r.json().Toaster.cps
            },
            Oven: {
                owned: r.json().Oven.owned,
                cps: r.json().Oven.cps
            },
            Microwave: {
                owned: r.json().Microwave.owned,
                cps: r.json().Microwave.cps
            },
            Farm: {
                owned: r.json().Farm.owned,
                cps: r.json().Farm.cps
            },
            Transport: {
                owned: r.json().Transport.owned,
                cps: r.json().Transport.cps
            },
            Solar: {
                owned: r.json().Solar.owned,
                cps: r.json().Solar.cps
            },
            Radio: {
                owned: r.json().Radio.owned,
                cps: r.json().Radio.cps
            },
            Messenger: r.json().Messenger,
            Mailbox: r.json().Mailbox,
            Folders: r.json().Folders,
            Catering: r.json().Catering,
            Optimist: r.json().Optimist,
            Shipment: r.json().Shipment,
            Swirl: r.json().Swirl,
            Monopoly: r.json().Monopoly,
            Hired: r.json().Hired,
            Lovely: r.json().Lovely,
            Decaffeinated: r.json().Decaffeinated,
            Caffeinated: r.json().Caffeinated,
            error: r.json().error
        }
    };
    async garden(userid, amount) {
        if (!userid) return console.log("ERROR");
        if (!amount) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/garden/${userid}/${amount}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        return {
            Vanilla: {
                price: r.json().VanillaPrice,
                owned: r.json().VanillaOwned
            },
            Cocoa: {
                price: r.json().CocoaPrice,
                owned: r.json().CocoaOwned
            },
            Coffee: {
                price: r.json().CoffeePrice,
                owned: r.json().CoffeeOwned
            },
            Pecans: {
                price: r.json().PecansPrice,
                owned: r.json().PecansOwned
            },
            Blueberry: {
                price: r.json().BlueberryPrice,
                owned: r.json().BlueberryOwned
            },
            Blackberry: {
                price: r.json().BlackberryPrice,
                owned: r.json().BlackberryOwned
            },
            Sugar: {
                price: r.json().SugarPrice,
                owned: r.json().SugarOwned
            },
            Cinnamon: {
                price: r.json().CinnamonPrice,
                owned: r.json().CinnamonOwned
            },
            error: r.json().error
        }
    };
    async test(userid) {
        if (!userid) return console.log("ERROR");
        const r = await w({
            url: `https://cafebot.xyz/api/purchased/${userid}`,
            method: 'GET',
            headers: {
                'Authorization': this.token
            }
        }).send();
        console.log(r.json());
        
    };
};