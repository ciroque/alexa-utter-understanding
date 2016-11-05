import chai = require('chai');
import NullRequestPostProcessor from '../main/handlers/request/DefaultRequestPostProcessor';
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';

let expect = chai.expect;

describe('DefaultRequestPostProcessor', () => {
    it('Returns the given SpeechletResponseEnvelope', (done: any) => {
        let expectedResponse = SpeechletResponseEnvelope.defaultInstance;
        let processor = new NullRequestPostProcessor();
        processor
            .handleRequest(null, null, expectedResponse)
            .then((response: SpeechletResponseEnvelope) => {
                expect(response).to.eq(expectedResponse);
                done();
            });
    });
});
