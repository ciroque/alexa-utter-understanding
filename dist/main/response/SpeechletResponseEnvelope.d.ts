import { SpeechletResponse } from './SpeechletResponse';
export declare class SpeechletResponseEnvelope {
    response: SpeechletResponse;
    version: string;
    static readonly defaultInstance: SpeechletResponseEnvelope;
    constructor(response: SpeechletResponse, sessionAttributes: any);
}
