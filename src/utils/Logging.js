const _log = require("./log");

class Logging {
    constructor() {

    }

   async yes(input, { disableLogs = false, type } = {}) {
        this._input = input;
        this.options = { disableLogs, type };
        if (this.options.disableLogs) return;
        switch (this.options.type) {
            case 'error':
                _log.error(this._input);
                break;
            case 'warn':
                _log.warn(this._input);
                break;
            case 'log':
                _log.log(this._input);
                break;
            case 'server':
                _log.server(this._input);
                break;
            default:
                _log.error(this._input);
                break;
        }
    }
};

module.exports = Logging;