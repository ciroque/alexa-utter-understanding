import chai = require('chai');
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';
import {LinkAccountCard} from '../main/response/speech/LinkAccountCard';
import {OutputSpeech} from '../main/response/speech/OutputSpeech';

let expect = chai.expect;

describe('SpeechletResponseEnvelope', () => {
    it('generates a LinkAccount response', (done: any) => {
        let linkAccountResponse = SpeechletResponseEnvelope.linkAccountInstance;

        expect(linkAccountResponse.response.card).to.be.instanceof(LinkAccountCard);
        expect(linkAccountResponse.response.outputSpeech.type).to.eq(OutputSpeech.PLAINTEXT);
        expect(linkAccountResponse.response.outputSpeech.text).to.eq('Please go to your Alexa app and link your account.');
        expect(linkAccountResponse.version).to.eq('1.0');
        expect(linkAccountResponse.response.reprompt);

        console.log(`\n\n${JSON.stringify(linkAccountResponse)}\n\n`);

        done();
    });
});
