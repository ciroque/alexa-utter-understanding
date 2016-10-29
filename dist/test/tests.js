"use strict";
const chai = require('chai');
const index_1 = require('../main/index');
const Logger_1 = require('../main/Logger');
let expect = chai.expect;
class MockContext {
    constructor() {
        this.logger = new Logger_1.Logger('MockContext');
        this.succeedArgs = [];
        this.failArgs = [];
    }
    succeed(args) {
        this.logger.debug(`succeed(__ARGS(${args}))`);
        this.succeedArgs.push(args);
    }
    fail(args) {
        this.logger.error(`fail(__ARGS(${args}))`);
        this.failArgs.push(args);
    }
}
describe('UtterUnderstanding', () => {
    it('Handles a null event', () => {
        let context = new MockContext();
        let uu = new index_1.UtterUnderstanding();
        uu.handleRequest(null, context);
        expect(context.failArgs.length).to.eq(1);
        expect(context.succeedArgs.length).to.eq(0);
    });
});
//# sourceMappingURL=tests.js.map