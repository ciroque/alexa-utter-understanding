import { AlexaResponse } from '../AlexaResponse';
export declare class AmznHelpIntentResponse {
    private static helpText;
    private static rePromptText;
    static getInstance(sessionAttributes: any, shouldEndSession: boolean): AlexaResponse;
}
