import {SpeechletResponseEnvelope} from '../SpeechletResponseEnvelope';
import {SpeechletResponse} from '../SpeechletResponse';
import {OutputSpeech} from '../speech/OutputSpeech';
import {Card} from '../speech/Card';

export class UnknownIntentResponse {
    private static outputText = 'I did not understand the intent.';

    public static getInstance(sessionAttributes: any, shouldEndSession: boolean) {
        let outputSpeech = new OutputSpeech(this.outputText, OutputSpeech.PLAINTEXT);
        let card = new Card('Unknown Intent', this.outputText, Card.SIMPLE);
        let speechletResponse = new SpeechletResponse(outputSpeech, card, null, shouldEndSession);
        return new SpeechletResponseEnvelope(speechletResponse, sessionAttributes);
    }
}
