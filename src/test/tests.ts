import chai = require('chai');
import {UtterUnderstanding} from '../main/index';
import {Logger} from '../main/Logger';

let expect = chai.expect;

class MockContext {
    private logger: Logger = new Logger('MockContext');
    public succeedArgs: any[] = [];
    public failArgs: any[] = [];

    public succeed(args: any): void {
        this.logger.debug(`succeed(__ARGS(${args}))`);
        this.succeedArgs.push(args);
    }

    public fail(args: any): void {
        this.logger.error(`fail(__ARGS(${args}))`);
        this.failArgs.push(args);
    }
}

describe('UtterUnderstanding', () => {
    it('Handles a null event', () => {
        let context = new MockContext();
        let uu = new UtterUnderstanding();
        uu.handleRequest(null, context);
        expect(context.failArgs.length).to.eq(1);
        expect(context.succeedArgs.length).to.eq(0);
    });
});
