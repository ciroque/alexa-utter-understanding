import {AlexaResponse} from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
import {SpeechletResponse} from '../response/SpeechletResponse';
import {SpeechletCard} from '../response/SpeechletCard';
import {SpeechletReprompt} from '../response/SpeechletReprompt';
import {SpeechletOutputSpeech} from '../response/SpeechletOutputSpeech';
import {Logger} from '../Logger';

export class UnknownRequestHandler implements IRequestHandler {
    public static didNotUnderstandText = 'I did not understand the request.';
    private logger = new Logger('UnknownRequestHandler');

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve: any) => {
            let card = new SpeechletCard('Unknown Request', UnknownRequestHandler.didNotUnderstandText, 'Simple');
            let outputSpeech = new SpeechletOutputSpeech(UnknownRequestHandler.didNotUnderstandText, 'PlainText');
            let repromptSpeech = new SpeechletOutputSpeech('Available actions include...', 'PlainText');
            let reprompt = new SpeechletReprompt(repromptSpeech);
            let speechletResponse = new SpeechletResponse(
                outputSpeech,
                card,
                reprompt,
                true
            );
            let alexaResponse = new AlexaResponse(speechletResponse, {});
            resolve(alexaResponse);
        });
    }
}
