import { SpeechletResponseEnvelope } from '../SpeechletResponseEnvelope';
export declare class UnknownIntentResponse {
    private static outputText;
    static getInstance(sessionAttributes: any, shouldEndSession: boolean): SpeechletResponseEnvelope;
}
