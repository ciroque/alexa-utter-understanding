"use strict";
const chai = require('chai');
const index_1 = require('../main/index');
let expect = chai.expect;
class MockEvent {
    constructor(requestType = null) {
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
    it('Handles a null event Request', (done) => {
        let utterUnderstanding = new index_1.UtterUnderstanding();
        utterUnderstanding
            .handleRequest(null, null)
            .catch((error) => {
            expect(error.message).to.contain('Cannot read property \'request\' of null');
            done();
        });
    });
    it('Handles an IntentRequest', (done) => {
        let event = new MockEvent('IntentRequest');
        let utterUnderstanding = new index_1.UtterUnderstanding();
        utterUnderstanding
            .handleRequest(event, null)
            .then((response) => {
            expect(response).to.not.eq(null);
            done();
        })
            .catch(done);
    });
});
//# sourceMappingURL=tests.js.map