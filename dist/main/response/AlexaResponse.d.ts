import { SpeechletResponse } from './SpeechletResponse';
export declare class AlexaResponse {
    response: SpeechletResponse;
    version: string;
    static readonly defaultInstance: AlexaResponse;
    constructor(response: SpeechletResponse, sessionAttributes: any);
}
