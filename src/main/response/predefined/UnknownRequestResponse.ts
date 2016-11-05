import {SpeechletResponseEnvelope} from '../SpeechletResponseEnvelope';
import {SpeechletResponse} from '../SpeechletResponse';
import {SpeechletOutputSpeech} from '../speech/OutputSpeech';
import {SpeechletCard} from '../speech/Card';

export class UnknownRequestResponse {
    private static outputText = 'I did not understand the request.';

    public static getInstance(sessionAttributes: any, shouldEndSession: boolean) {
        let outputSpeech = new SpeechletOutputSpeech(this.outputText, SpeechletOutputSpeech.PLAINTEXT);
        let card = new SpeechletCard('Unknown Request ', this.outputText, SpeechletCard.SIMPLE);
        let speechletResponse = new SpeechletResponse(outputSpeech, card, null, shouldEndSession);
        return new SpeechletResponseEnvelope(speechletResponse, sessionAttributes);
    }
}
