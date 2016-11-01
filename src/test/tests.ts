import chai = require('chai');
import {UtterUnderstanding} from '../main/index';
import {AlexaResponse} from '../main/response/AlexaResponse';
import {UnknownRequestHandler} from '../main/handlers/request/UnknownRequestHandler';
import {MockEvent} from './MockEvent';

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
            .then((response: AlexaResponse) => {
                expect(response).to.not.eq(null);
                done();
            })
            .catch(done);
    });

    it('handles an Unknown Request', (done: any) => {
        let event = new MockEvent('FELDERGARB');
        let utterUnderstanding = new UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response: AlexaResponse) => {
                expect(response).to.not.eq(null);

                // NOTE: The general idea is that this text will contain the available actions...
                expect(response.response.outputSpeech.text).to.contain(UnknownRequestHandler.didNotUnderstandText);
                done();
            })
            .catch(done);
    });
});
