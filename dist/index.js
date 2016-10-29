"use strict";
const Logger_1 = require('./Logger');
class UtterUnderstanding {
    constructor() {
        this.logger = new Logger_1.Logger('UtterUnderstanding');
        this.handlers = {};
        this.handlers['IntentRequest'] = this.handleIntent;
        this.handlers['LaunchRequest'] = this.handleLaunch;
        this.handlers['EndSessionRequest'] = this.handleEndSession;
    }
    static handler(event, context) {
        new UtterUnderstanding().handleRequest(event, context);
    }
    handleRequest(event, context) {
        let handler = this.handlers[event.request.type] || this.handleDefault;
        handler(event, context)
            .then((response) => context.succeed(response))
            .catch((error) => context.fail(error));
    }
    handleDefault() {
        this.logger.debug('UtterUnderstanding::handleDefault');
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
    handleEndSession() {
        this.logger.debug('UtterUnderstanding::handleEndSession');
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
    handleIntent() {
        this.logger.debug('UtterUnderstanding::handleIntent');
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
    handleLaunch() {
        this.logger.debug('UtterUnderstanding::handleLaunch');
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
}
function handler(event, context) {
    UtterUnderstanding.handler(event, context);
}
exports.handler = handler;
//# sourceMappingURL=index.js.map