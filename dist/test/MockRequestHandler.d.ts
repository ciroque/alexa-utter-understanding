import IRequestHandler from '../main/handlers/IRequestHandler';
import { AlexaResponse } from '../main/response/AlexaResponse';
export default class MockRequestHandler implements IRequestHandler {
    private logger;
    private response;
    private requestHandled;
    constructor(response?: any);
    readonly handled: boolean;
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
