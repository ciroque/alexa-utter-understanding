import { SpeechletResponse } from './SpeechletResponse';
export declare class SpeechletResponseEnvelope {
    response: SpeechletResponse;
    version: string;
    sessionAttributes: any;
    static readonly defaultInstance: SpeechletResponseEnvelope;
    static readonly linkAccountInstance: SpeechletResponseEnvelope;
    constructor(response: SpeechletResponse, sessionAttributes: any);
}
