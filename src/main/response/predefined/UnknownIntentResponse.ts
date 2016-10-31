import {AlexaResponse} from '../AlexaResponse';
import {SpeechletResponse} from '../SpeechletResponse';
import {SpeechletOutputSpeech} from '../SpeechletOutputSpeech';
import {SpeechletCard} from '../SpeechletCard';
import {SpeechletReprompt} from '../SpeechletReprompt';

export class UnknownIntentResponse {
    private static outputText = 'I did not understand the intent.';
    private static rePromptText = 'Available actions include...';

    public static getInstance(sessionAttributes: any, shouldEndSession: boolean) {
        let outputSpeech = new SpeechletOutputSpeech(this.outputText, SpeechletOutputSpeech.PLAINTEXT);
        let repromptOutputSpeech = new SpeechletOutputSpeech(this.rePromptText, SpeechletOutputSpeech.PLAINTEXT);
        let card = new SpeechletCard('Unknown Intent', this.outputText, SpeechletCard.SIMPLE);
        let reprompt = new SpeechletReprompt(repromptOutputSpeech);
        let speechletResponse = new SpeechletResponse(outputSpeech, card, reprompt, shouldEndSession);
        return new AlexaResponse(speechletResponse, sessionAttributes);
    }
}