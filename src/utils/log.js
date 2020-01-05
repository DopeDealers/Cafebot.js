const chalk = require("chalk");
const moment = require("moment");

exports.log = (content, type = "log") => {
  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
  switch (type) {
    case "log": {
      return console.log(`${timestamp} ${chalk.black.bgBlue('CafeApi')} ${chalk.bgBlue(type.toUpperCase())} ${content} `);
    }
    case "warn": {
      return console.log(`${timestamp} ${chalk.black.bgYellow('CafeApi')} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
    }
    case "error": {
      return console.log(`${timestamp} ${chalk.black.bgRed('CafeApi')} ${chalk.bgRed(type.toUpperCase())} ${content} `);
    }
    case "server": {
      return console.log(`${timestamp} ${chalk.black.bgGreen('CafeApi')} ${chalk.green(type.toUpperCase())} ${content} `);
    }
    default: throw new TypeError("Logger type must be either warn, debug, log or error.");
  }
}; 

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.server = (...args) => this.log(...args, "server");