"use strict";
const chai = require('chai');
const IntentRequestHandler_1 = require('../main/handlers/request/IntentRequestHandler');
const AlexaResponse_1 = require('../main/response/AlexaResponse');
const IntentHandler_1 = require('../main/handlers/intent/IntentHandler');
const MockEvent_1 = require('./MockEvent');
const UnknownIntentResponse_1 = require('../main/response/predefined/UnknownIntentResponse');
let expect = chai.expect;
class MockIntentHandler extends IntentHandler_1.IntentHandler {
    constructor(response) {
        super('MockIntentHandler');
        this.intentHandled = false;
        this.response = response;
    }
    get handled() {
        return this.intentHandled;
    }
    handleIntent(event, context) {
        this.intentHandled = true;
        return new Promise((resolve, reject) => {
            if (this.response instanceof AlexaResponse_1.AlexaResponse) {
                resolve(this.response);
            }
            else {
                reject(this.response);
            }
        });
    }
}
describe('IntentRequestHandler', () => {
    it(`Allows registration of an Intent Handler`, () => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler_1.IntentRequestHandler();
        let sampleHandler = new MockIntentHandler();
        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);
        expect(intentRequestHandler.handlerRegistered(intentName, sampleHandler)).to.eq(true);
        expect(intentRequestHandler.handlerRegistered(intentName, null)).to.eq(false);
        expect(intentRequestHandler.handlerRegistered('dummy', null)).to.eq(false);
    });
    it(`Handles a registered Intent`, (done) => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler_1.IntentRequestHandler();
        let expectedResponse = AlexaResponse_1.AlexaResponse.defaultInstance;
        let sampleHandler = new MockIntentHandler(expectedResponse);
        let event = new MockEvent_1.MockEvent('IntentRequest', intentName);
        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);
        intentRequestHandler
            .handleRequest(event, null)
            .then((alexaResponse) => {
            expect(alexaResponse).to.eq(expectedResponse);
            expect(sampleHandler.handled).to.eq(true);
            done();
        })
            .catch(done);
    });
    it(`Does not handle a non-registered Intent`, (done) => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler_1.IntentRequestHandler();
        let expectedResponse = AlexaResponse_1.AlexaResponse.defaultInstance;
        let sampleHandler = new MockIntentHandler(expectedResponse);
        let event = new MockEvent_1.MockEvent('IntentRequest', 'NonRegisteredIntent');
        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);
        intentRequestHandler
            .handleRequest(event, null)
            .then((alexaResponse) => {
            expect(JSON.stringify(alexaResponse)).to.eq(JSON.stringify(UnknownIntentResponse_1.UnknownIntentResponse.getInstance({}, true)));
            expect(sampleHandler.handled).to.eq(false);
            done();
        })
            .catch(done);
    });
});
//# sourceMappingURL=IntentRequestHandler.spec.js.map