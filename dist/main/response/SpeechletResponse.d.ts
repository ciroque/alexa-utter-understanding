import { SpeechletOutputSpeech } from './speech/OutputSpeech';
import { SpeechletCard } from './speech/Card';
import { SpeechletReprompt } from './speech/Reprompt';
export declare class SpeechletResponse {
    outputSpeech: SpeechletOutputSpeech;
    card: SpeechletCard;
    reprompt: SpeechletReprompt;
    shouldEndSession: boolean;
    static readonly defaultInstance: SpeechletResponse;
    constructor(outputSpeech: SpeechletOutputSpeech, card: SpeechletCard, reprompt: SpeechletReprompt, shouldEndSession: boolean);
}
