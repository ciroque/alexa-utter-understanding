"use strict";
const RequestPostProcessor_1 = require('../main/handlers/request/RequestPostProcessor');
const AlexaResponse_1 = require('../main/response/AlexaResponse');
class MockRequestPostProcessor extends RequestPostProcessor_1.RequestPostProcessor {
    constructor(response) {
        super('MockRequestPostProcessor');
        this.response = response;
        this.requesthandled = false;
    }
    get handled() {
        return this.requesthandled;
    }
    handleRequest(event, context, response) {
        this.logger.debug(`Post-processing __EVT(${JSON.stringify(event)}), __CTXT(${JSON.stringify(context)}, __RESP(${JSON.stringify(response)}))`);
        this.requesthandled = true;
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
exports.MockRequestPostProcessor = MockRequestPostProcessor;
//# sourceMappingURL=MockRequestPostProcessor.js.map