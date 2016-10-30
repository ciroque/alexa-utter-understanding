/**
 * Created by swagner on 10/29/16.
 */
"use strict";
class Logger {
    constructor(module) {
        this.module = module;
    }
    debug(message) {
        this.write(LogLevel.debug, message);
    }
    error(message) {
        this.write(LogLevel.error, message);
    }
    trace(message) {
        this.write(LogLevel.trace, message);
    }
    warn(message) {
        this.write(LogLevel.warn, message);
    }
    write(level, message) {
        console.log(`${new Date().toISOString()}\t${level}\t${this.module}\t${message}`);
    }
}
exports.Logger = Logger;
(function (LogLevel) {
    LogLevel[LogLevel["trace"] = 0] = "trace";
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["warn"] = 2] = "warn";
    LogLevel[LogLevel["error"] = 3] = "error";
})(exports.LogLevel || (exports.LogLevel = {}));
var LogLevel = exports.LogLevel;
//# sourceMappingURL=Logger.js.map