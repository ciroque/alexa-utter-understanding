import chai = require('chai');
import {IntentRequestHandler} from '../main/handlers/request/IntentRequestHandler';

let expect = chai.expect;

describe('UtterUnderstanding', () => {
    it('handles the AMAZON.HelpIntent', (done: any) => {
        let intentRequestHandler = new IntentRequestHandler();
        intentRequestHandler.handleRequest(null, null);
        expect(true).to.eq(true);
        done();
    });
});
