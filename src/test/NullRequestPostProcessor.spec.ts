import chai = require('chai');
import NullRequestPostProcessor from '../main/handlers/request/NullRequestPostProcessor';
import {AlexaResponse} from '../main/response/AlexaResponse';

let expect = chai.expect;

describe('NullRequestPostProcessor', () => {
    it('Returns the given AlexaResponse', (done: any) => {
        let expectedResponse = AlexaResponse.defaultInstance;
        let processor = new NullRequestPostProcessor();
        processor
            .handleRequest(null, null, expectedResponse)
            .then((response: AlexaResponse) => {
                expect(response).to.eq(expectedResponse);
                done();
            });
    });
});
