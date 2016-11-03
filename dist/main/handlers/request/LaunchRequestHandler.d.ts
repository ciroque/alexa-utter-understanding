import { AlexaResponse } from '../../response/AlexaResponse';
import { RequestHandler } from './RequestHandler';
export declare class LaunchRequestHandler extends RequestHandler {
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
