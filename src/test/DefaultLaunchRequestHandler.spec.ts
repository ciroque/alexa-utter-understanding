import chai = require('chai');
import {DefaultLaunchRequestHandler} from '../main/handlers/request/DefaultLaunchRequestHandler';

let expect = chai.expect;

describe('DefaultLaunchRequestHandler', () => {
    it(`Rejects with a 'Not Implemented' message`, (done: any) => {
        let processor = new DefaultLaunchRequestHandler();
        processor
            .handleRequest(null, null)
            .catch((error: any) => {
                expect(error).to.eq('Not Implemented');
                done();
            });
    });
});
