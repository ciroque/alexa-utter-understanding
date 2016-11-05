import { OutputSpeech } from './speech/OutputSpeech';
import { Card } from './speech/Card';
import { Reprompt } from './speech/Reprompt';
export declare class SpeechletResponse {
    outputSpeech: OutputSpeech;
    card: Card;
    reprompt: Reprompt;
    shouldEndSession: boolean;
    static readonly defaultInstance: SpeechletResponse;
    constructor(outputSpeech: OutputSpeech, card: Card, reprompt: Reprompt, shouldEndSession: boolean);
}
