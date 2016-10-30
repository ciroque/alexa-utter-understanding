import chai = require('chai');
import {UtterUnderstanding} from '../main/index';
import {AlexaResponse} from '../main/response/AlexaResponse';

let expect = chai.expect;

class MockEvent {
    public request: any;

    constructor(requestType: string = null) {
        this.request = {
            type: requestType
        };
    }
}
//
// class MockContext {
//     private logger: Logger = new Logger('MockContext');
//     public succeedArgs: any[] = [];
//     public failArgs: any[] = [];
//
//     public succeed(args: any): void {
//         this.logger.debug(`succeed(__ARGS(${args}))`);
//         this.succeedArgs.push(args);
//     }
//
//     public fail(args: any): void {
//         this.logger.error(`fail(__ARGS(${args}))`);
//         this.failArgs.push(args);
//     }
// }

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
        let event = new MockEvent('IntentRequest');
        let utterUnderstanding = new UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response: AlexaResponse) => {
                expect(response).to.not.eq(null);
                done();
            })
            .catch(done);
    });
});
