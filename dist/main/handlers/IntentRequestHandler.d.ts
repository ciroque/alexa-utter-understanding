import { AlexaResponse } from '../AlexaResponse';
import IRequestHandler from './IRequestHandler';
export declare class IntentRequestHandler implements IRequestHandler {
    private logger;
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
