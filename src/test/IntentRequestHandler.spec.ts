import chai = require('chai');
import {IntentRequestHandler} from '../main/handlers/request/IntentRequestHandler';
import {MockEvent} from './MockEvent';

let expect = chai.expect;

describe('UtterUnderstanding', () => {
    it('handles the AMAZON.HelpIntent', (done: any) => {
        let event = new MockEvent('IntentRequest', 'AMAZON.HelpIntent');
        let intentRequestHandler = new IntentRequestHandler();
        intentRequestHandler
            .handleRequest(event, null)
            .then((response: any) => {
                expect(response).to.not.eq(null);
                done();
            })
            .catch(done);
    });
});
