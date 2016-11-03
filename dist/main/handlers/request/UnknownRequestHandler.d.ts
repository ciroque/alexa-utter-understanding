import { AlexaResponse } from '../../response/AlexaResponse';
import { RequestHandler } from './RequestHandler';
export declare class UnknownRequestHandler extends RequestHandler {
    static didNotUnderstandText: string;
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
