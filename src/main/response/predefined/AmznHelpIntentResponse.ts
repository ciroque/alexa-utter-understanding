import {AlexaResponse} from '../AlexaResponse';
import {SpeechletResponse} from '../SpeechletResponse';
import {SpeechletOutputSpeech} from '../SpeechletOutputSpeech';
import {SpeechletCard} from '../SpeechletCard';
import {SpeechletReprompt} from '../SpeechletReprompt';

export class AmznHelpIntentResponse {
    private static helpText = 'Your help text goes here';
    private static rePromptText = 'Use the things';

    public static getInstance(sessionAttributes: any, shouldEndSession: boolean) {
        let outputSpeech = new SpeechletOutputSpeech(this.helpText, SpeechletOutputSpeech.PLAINTEXT);
        let repromptOutputSpeech = new SpeechletOutputSpeech(this.rePromptText, SpeechletOutputSpeech.PLAINTEXT);
        let card = new SpeechletCard('Help ', this.helpText, SpeechletCard.SIMPLE);
        let reprompt = new SpeechletReprompt(repromptOutputSpeech);
        let speechletResponse = new SpeechletResponse(outputSpeech, card, reprompt, shouldEndSession);
        return new AlexaResponse(speechletResponse, sessionAttributes);
    }
}
