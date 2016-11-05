import chai = require('chai');
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';
import {LinkAccountCard} from '../main/response/speech/LinkAccountCard';
import {OutputSpeech} from '../main/response/speech/OutputSpeech';
import {Card} from '../main/response/speech/Card';
import {SpeechletResponse} from '../main/response/SpeechletResponse';

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

    it('maintains the sessionAttribute property', () => {
        let card = Card.defaultInstance;
        let outputSpeech = new OutputSpeech('TEST', OutputSpeech.PLAINTEXT);
        let response = new SpeechletResponse(outputSpeech, card, null, true);
        let theDate = new Date();
        let sessionAttributes = { key: 'value', date: theDate };
        let envelope = new SpeechletResponseEnvelope(response, sessionAttributes);

        expect(envelope.sessionAttributes).to.not.eq(null);
        expect(envelope.sessionAttributes.key).eq('value');
        expect(envelope.sessionAttributes.date).to.eq(theDate);
    });
});
