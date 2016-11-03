"use strict";
const AlexaResponse_1 = require('../main/response/AlexaResponse');
const RequestHandler_1 = require('../main/handlers/request/RequestHandler');
class MockRequestHandler extends RequestHandler_1.RequestHandler {
    constructor(response) {
        super('MockRequestHandler');
        this.requestHandled = false;
        this.response = response;
    }
    get handled() {
        return this.requestHandled;
    }
    handleRequest(event, context) {
        this.requestHandled = true;
        return new Promise((resolve, reject) => {
            if (this.response instanceof AlexaResponse_1.AlexaResponse) {
                this.logger.debug(`RESOLVING __VALUE(${JSON.stringify(this.response)})`);
                resolve(this.response);
            }
            else {
                this.logger.debug(`REJECTING __VALUE(${JSON.stringify(this.response)})`);
                reject(this.response);
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MockRequestHandler;
//# sourceMappingURL=MockRequestHandler.js.map