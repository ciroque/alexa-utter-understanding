import chai = require('chai');
import {UtterUnderstanding} from '../main/UtterUnderstanding';
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';
import {UnknownRequestHandler} from '../main/handlers/request/UnknownRequestHandler';
import {MockEvent} from './MockEvent';
import MockRequestHandler from './MockRequestHandler';
import {MockRequestPostProcessor} from './MockRequestPostProcessor';

let expect = chai.expect;

describe('UtterUnderstanding', () => {
    it('Handles a null event Request', (done: any) => {
        let utterUnderstanding = new UtterUnderstanding();
        utterUnderstanding
            .handleRequest(null, null)
            .catch((error: any) => {
                expect(error.message).to.contain('Cannot read property \'request\' of null');
                done();
            });
    });

    it('Handles an IntentRequest', (done: any) => {
        let event = new MockEvent('IntentRequest', 'IntentName');
        let utterUnderstanding = new UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response: SpeechletResponseEnvelope) => {
                expect(response).to.not.eq(null);
                done();
            })
            .catch(done);
    });

    it('handles an Unknown Request', (done: any) => {
        let event = new MockEvent('FELDERGARB', null);
        let utterUnderstanding = new UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response: SpeechletResponseEnvelope) => {
                expect(response).to.not.eq(null);

                // NOTE: The general idea is that this text will contain the available actions...
                expect(response.response.outputSpeech.text).to.contain(UnknownRequestHandler.didNotUnderstandText);
                done();
            })
            .catch(done);
    });

    it('allows registration of a request handler', (done) => {
        let requestName = 'FELDERGARB';
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent(requestName, null);
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let handler = new MockRequestHandler(expectedResponse);
        utterUnderstanding.registerRequestHandler(requestName, handler);

        utterUnderstanding
            .handleRequest(event, null)
            .then((response: SpeechletResponseEnvelope) => {
                expect(handler.handled).to.eq(true);
                expect(response).to.eq(expectedResponse);
                done();
            })
            .catch(done);
    });

    it('handles failure in registered request handler', (done) => {
        let requestName = 'FELDERGARB';
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent(requestName, null);
        let expectedResponse = 'Could not connect to to the database';
        let handler = new MockRequestHandler(expectedResponse);
        utterUnderstanding.registerRequestHandler(requestName, handler);

        utterUnderstanding
            .handleRequest(event, null)
            .catch((error: any) => {
                expect(handler.handled).to.eq(true);
                expect(error).to.eq(expectedResponse);
                done();
            });
    });

    it('allows a preprocessor to be registered', (done: any) => {
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent('FELDERGARB', null);
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let handler = new MockRequestHandler(expectedResponse);
        utterUnderstanding.registerPreProcessHandler(handler);

        utterUnderstanding
            .handleRequest(event, null)
            .then((_: SpeechletResponseEnvelope) => {
                expect(handler.handled).to.eq(true);
                done();
            })
            .catch(done);
    });

    it('handles a failure in a preprocessor', (done: any) => {
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent('FELDERGARB', null);
        let expectedResponse = 'Invalid App ID';
        let handler = new MockRequestHandler(expectedResponse);
        utterUnderstanding.registerPreProcessHandler(handler);

        utterUnderstanding
            .handleRequest(event, null)
            .catch((error: any) => {
                expect(handler.handled).to.eq(true);
                expect(error).to.eq(expectedResponse);
                done();
            });
    });

    it('allows a post-request processor to be registered', (done: any) => {
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent('FELDERGARB', null);
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let handler = new MockRequestPostProcessor(expectedResponse);
        utterUnderstanding.registerPostProcessHandler(handler);

        utterUnderstanding
            .handleRequest(event, null)
            .then((response: SpeechletResponseEnvelope) => {
                expect(handler.handled).to.eq(true);
                expect(response).to.eq(expectedResponse);
                done();
            })
            .catch(done);
    });

    it('handles a failure in a postprocessor', (done: any) => {
        let utterUnderstanding = new UtterUnderstanding();
        let event = new MockEvent('FELDERGARB', null);
        let expectedResponse = 'Something went horribly horribly wrong.';
        let handler = new MockRequestPostProcessor(expectedResponse);
        utterUnderstanding.registerPostProcessHandler(handler);

        utterUnderstanding
            .handleRequest(event, null)
            .catch((response: any) => {
                expect(handler.handled).to.eq(true);
                expect(response).to.eq(expectedResponse);
                done();
            });
    });
});
