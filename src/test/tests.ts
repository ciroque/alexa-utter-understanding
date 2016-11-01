import chai = require('chai');
import {UtterUnderstanding} from '../main/index';
import {AlexaResponse} from '../main/response/AlexaResponse';
import {UnknownRequestHandler} from '../main/handlers/request/UnknownRequestHandler';
import {MockEvent} from './MockEvent';

let expect = chai.expect;

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
                expect(response.response.reprompt.outputSpeech.text.toLowerCase()).to.contain('available actions include');
                done();
            })
            .catch(done);
    });
});
