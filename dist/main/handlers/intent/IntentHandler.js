"use strict";
const Logger_1 = require('../../Logger');
class IntentHandler {
    constructor(name, intentName) {
        this.name = name;
        this.intentName = intentName;
        this.logger = new Logger_1.Logger(name);
    }
}
exports.IntentHandler = IntentHandler;
//# sourceMappingURL=IntentHandler.js.map