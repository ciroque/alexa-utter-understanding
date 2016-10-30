"use strict";
class Logger {
    constructor(module) {
        this.module = module;
    }
    debug(message) {
        this.write(LogLevel.DEBUG, message);
    }
    error(message) {
        this.write(LogLevel.ERROR, message);
    }
    trace(message) {
        this.write(LogLevel.TRACE, message);
    }
    warn(message) {
        this.write(LogLevel.WARN, message);
    }
    write(level, message) {
        console.log(`${new Date().toISOString()}\t${LogLevel[level].toString()}\t${this.module}\t${message}`);
    }
}
exports.Logger = Logger;
(function (LogLevel) {
    LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(exports.LogLevel || (exports.LogLevel = {}));
var LogLevel = exports.LogLevel;
//# sourceMappingURL=Logger.js.map