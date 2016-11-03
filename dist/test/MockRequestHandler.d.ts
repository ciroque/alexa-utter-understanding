import { AlexaResponse } from '../main/response/AlexaResponse';
import { RequestHandler } from '../main/handlers/request/RequestHandler';
export default class MockRequestHandler extends RequestHandler {
    private response;
    private requestHandled;
    constructor(response?: any);
    readonly handled: boolean;
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
