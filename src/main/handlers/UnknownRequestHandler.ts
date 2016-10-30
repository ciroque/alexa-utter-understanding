import {AlexaResponse} from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
import {SpeechletResponse} from '../response/SpeechletResponse';
import {SpeechletCard} from '../response/SpeechletCard';
import {SpeechletReprompt} from '../response/SpeechletReprompt';
import {SpeechletOutputSpeech} from '../response/SpeechletOutputSpeech';

export class UnknownRequestHandler implements IRequestHandler {
    public static didNotUnderstandText = 'I did not understand the request.';

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any, reject: any) => {
            let card = new SpeechletCard('Unknown Request', UnknownRequestHandler.didNotUnderstandText);
            let outputSpeech = new SpeechletOutputSpeech(UnknownRequestHandler.didNotUnderstandText);
            let repromptSpeech = new SpeechletOutputSpeech('Available actions include...');
            let reprompt = new SpeechletReprompt(repromptSpeech);
            let speechletResponse = new SpeechletResponse(
                outputSpeech,
                card,
                reprompt,
                true
            );
            let alexaResponse = new AlexaResponse(speechletResponse);
            resolve(alexaResponse);
        });
    }
}
