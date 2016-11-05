import {SpeechletResponse} from './SpeechletResponse';
import {OutputSpeech} from './speech/OutputSpeech';
import {LinkAccountCard} from './speech/LinkAccountCard';

export class SpeechletResponseEnvelope {
    public version = '1.0';

    public static get defaultInstance(): SpeechletResponseEnvelope {
        let speechletResponse = SpeechletResponse.defaultInstance;
        return new SpeechletResponseEnvelope(speechletResponse, {});
    }

    public static get linkAccountInstance(): SpeechletResponseEnvelope {
        let card = new LinkAccountCard();
        let outputSpeech = new OutputSpeech('Please go to your Alexa app and link your account.', OutputSpeech.PLAINTEXT);
        let response = new SpeechletResponse(outputSpeech, card, null, null);

        delete card.content;
        delete card.title;
        delete response.reprompt;
        delete response.shouldEndSession;

        return new SpeechletResponseEnvelope(response, {});
    }

    constructor(public response: SpeechletResponse, sessionAttributes: any) { }
}
