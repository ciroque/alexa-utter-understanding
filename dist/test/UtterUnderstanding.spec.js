"use strict";
const chai = require('chai');
const UtterUnderstanding_1 = require('../main/UtterUnderstanding');
const AlexaResponse_1 = require('../main/response/AlexaResponse');
const UnknownRequestHandler_1 = require('../main/handlers/request/UnknownRequestHandler');
const MockEvent_1 = require('./MockEvent');
const MockRequestHandler_1 = require('./MockRequestHandler');
const MockRequestPostProcessor_1 = require('./MockRequestPostProcessor');
let expect = chai.expect;
describe('UtterUnderstanding', () => {
    it('Handles a null event Request', (done) => {
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        utterUnderstanding
            .handleRequest(null, null)
            .catch((error) => {
            expect(error.message).to.contain('Cannot read property \'request\' of null');
            done();
        });
    });
    it('Handles an IntentRequest', (done) => {
        let event = new MockEvent_1.MockEvent('IntentRequest', 'IntentName');
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response) => {
            expect(response).to.not.eq(null);
            done();
        })
            .catch(done);
    });
    it('handles an Unknown Request', (done) => {
        let event = new MockEvent_1.MockEvent('FELDERGARB');
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response) => {
            expect(response).to.not.eq(null);
            // NOTE: The general idea is that this text will contain the available actions...
            expect(response.response.outputSpeech.text).to.contain(UnknownRequestHandler_1.UnknownRequestHandler.didNotUnderstandText);
            done();
        })
            .catch(done);
    });
    it('allows registration of a request handler', (done) => {
        let requestName = 'FELDERGARB';
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent(requestName);
        let expectedResponse = AlexaResponse_1.AlexaResponse.defaultInstance;
        let handler = new MockRequestHandler_1.default(expectedResponse);
        utterUnderstanding.registerRequestHandler(requestName, handler);
        utterUnderstanding
            .handleRequest(event, null)
            .then((response) => {
            expect(handler.handled).to.eq(true);
            expect(response).to.eq(expectedResponse);
            done();
        })
            .catch(done);
    });
    it('handles failure in registered request handler', (done) => {
        let requestName = 'FELDERGARB';
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent(requestName);
        let expectedResponse = 'Could not connect to to the database';
        let handler = new MockRequestHandler_1.default(expectedResponse);
        utterUnderstanding.registerRequestHandler(requestName, handler);
        utterUnderstanding
            .handleRequest(event, null)
            .catch((error) => {
            expect(handler.handled).to.eq(true);
            expect(error).to.eq(expectedResponse);
            done();
        });
    });
    it('allows a preprocessor to be registered', (done) => {
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent('FELDERGARB');
        let expectedResponse = AlexaResponse_1.AlexaResponse.defaultInstance;
        let handler = new MockRequestHandler_1.default(expectedResponse);
        utterUnderstanding.registerPreProcessHandler(handler);
        utterUnderstanding
            .handleRequest(event, null)
            .then((_) => {
            expect(handler.handled).to.eq(true);
            done();
        })
            .catch(done);
    });
    it('handles a failure in a preprocessor', (done) => {
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent('FELDERGARB');
        let expectedResponse = 'Invalid App ID';
        let handler = new MockRequestHandler_1.default(expectedResponse);
        utterUnderstanding.registerPreProcessHandler(handler);
        utterUnderstanding
            .handleRequest(event, null)
            .catch((error) => {
            expect(handler.handled).to.eq(true);
            expect(error).to.eq(expectedResponse);
            done();
        });
    });
    it('allows a post-request processor to be registered', (done) => {
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent('FELDERGARB');
        let expectedResponse = AlexaResponse_1.AlexaResponse.defaultInstance;
        let handler = new MockRequestPostProcessor_1.MockRequestPostProcessor(expectedResponse);
        utterUnderstanding.registerPostProcessHandler(handler);
        utterUnderstanding
            .handleRequest(event, null)
            .then((response) => {
            expect(handler.handled).to.eq(true);
            expect(response).to.eq(expectedResponse);
            done();
        })
            .catch(done);
    });
    it('handles a failure in a postprocessor', (done) => {
        let utterUnderstanding = new UtterUnderstanding_1.UtterUnderstanding();
        let event = new MockEvent_1.MockEvent('FELDERGARB');
        let expectedResponse = 'Something went horribly horribly wrong.';
        let handler = new MockRequestPostProcessor_1.MockRequestPostProcessor(expectedResponse);
        utterUnderstanding.registerPostProcessHandler(handler);
        utterUnderstanding
            .handleRequest(event, null)
            .catch((response) => {
            expect(handler.handled).to.eq(true);
            expect(response).to.eq(expectedResponse);
            done();
        });
    });
});
//# sourceMappingURL=UtterUnderstanding.spec.js.map