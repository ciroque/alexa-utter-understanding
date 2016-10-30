import { SpeechletOutputSpeech } from './SpeechletOutputSpeech';
import { SpeechletCard } from './SpeechletCard';
import { SpeechletReprompt } from './SpeechletReprompt';
export declare class SpeechletResponse {
    outputSpeech: SpeechletOutputSpeech;
    card: SpeechletCard;
    reprompt: SpeechletReprompt;
    shouldEndSession: boolean;
    static readonly defaultInstance: SpeechletResponse;
    constructor(outputSpeech: SpeechletOutputSpeech, card: SpeechletCard, reprompt: SpeechletReprompt, shouldEndSession: boolean);
}
