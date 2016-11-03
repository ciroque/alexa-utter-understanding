import { RequestPostProcessor } from '../main/handlers/request/RequestPostProcessor';
import { AlexaResponse } from '../main/response/AlexaResponse';
export declare class MockRequestPostProcessor extends RequestPostProcessor {
    private response;
    private requesthandled;
    constructor(response: any);
    readonly handled: boolean;
    handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse>;
}
