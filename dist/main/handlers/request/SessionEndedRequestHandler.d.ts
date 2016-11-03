import { AlexaResponse } from '../../response/AlexaResponse';
import { RequestHandler } from './RequestHandler';
export declare class SessionEndedRequestHandler extends RequestHandler {
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
