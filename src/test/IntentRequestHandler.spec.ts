import chai = require('chai');
import {IntentRequestHandler} from '../main/handlers/request/IntentRequestHandler';
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';
import {IntentHandler} from '../main/handlers/intent/IntentHandler';
import {MockEvent} from './MockEvent';
import {UnknownIntentResponse} from '../main/response/predefined/UnknownIntentResponse';

let expect = chai.expect;

class MockIntentHandler extends IntentHandler {
    private response: SpeechletResponseEnvelope;
    private intentHandled = false;

    constructor(response?: SpeechletResponseEnvelope) {
        super('MockIntentHandler');
        this.response = response;
    }

    get handled(): boolean {
        return this.intentHandled;
    }

    handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        this.intentHandled = true;
        return new Promise((resolve: any, reject: any) => {
            if (this.response instanceof SpeechletResponseEnvelope) {
                resolve(this.response);
            } else {
                reject(this.response);
            }
        });
    }
}

class MockIntentHandlerWithIntentName extends IntentHandler {
    handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        return undefined;
    }
}

describe('IntentRequestHandler', () => {
    it(`Allows registration of an Intent Handler`, () => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler();
        let sampleHandler = new MockIntentHandler();

        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);

        expect(intentRequestHandler.handlerRegistered(intentName, sampleHandler)).to.eq(true);
        expect(intentRequestHandler.handlerRegistered(intentName, null)).to.eq(false);
        expect(intentRequestHandler.handlerRegistered('dummy', null)).to.eq(false);
    });

    it(`Handles a registered Intent`, (done: any) => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler();
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let sampleHandler = new MockIntentHandler(expectedResponse);
        let event = new MockEvent('IntentRequest', intentName);

        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);

        intentRequestHandler
            .handleRequest(event, null)
            .then((alexaResponse: SpeechletResponseEnvelope) => {
                expect(alexaResponse).to.eq(expectedResponse);
                expect(sampleHandler.handled).to.eq(true);
                done();
            })
            .catch(done);
    });

    it(`Does not handle a non-registered Intent`, (done: any) => {
        let intentName = 'MockIntent';
        let intentRequestHandler = new IntentRequestHandler();
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let sampleHandler = new MockIntentHandler(expectedResponse);
        let event = new MockEvent('IntentRequest', 'NonRegisteredIntent');

        intentRequestHandler.registerIntentHandler(intentName, sampleHandler);

        intentRequestHandler
            .handleRequest(event, null)
            .then((alexaResponse: SpeechletResponseEnvelope) => {
                expect(JSON.stringify(alexaResponse)).to.eq(JSON.stringify(UnknownIntentResponse.getInstance({}, true)));
                expect(sampleHandler.handled).to.eq(false);
                done();
            })
            .catch(done);
    });

    it('registers an IntentHandler having an intentName property', () => {
        let mockIntentHandlerWithIntentName = new MockIntentHandlerWithIntentName('IMockYou', 'MockIntent');
        let intentRequestHandler = new IntentRequestHandler();

        intentRequestHandler.defineIntentHandler(mockIntentHandlerWithIntentName);

        expect(intentRequestHandler.handlerDefined(mockIntentHandlerWithIntentName)).to.eq(true);
    });
});
