"use strict";
const Logger_1 = require('../../Logger');
class RequestHandler {
    constructor(name) {
        this.name = name;
        this.logger = new Logger_1.Logger(name);
    }
}
exports.RequestHandler = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map