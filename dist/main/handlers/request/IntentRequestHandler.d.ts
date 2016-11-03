import { AlexaResponse } from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
import { IntentHandler } from '../intent/IntentHandler';
export declare class IntentRequestHandler implements IRequestHandler {
    private logger;
    private intentHandlers;
    private defaultHandler;
    constructor(unknownIntentHandler?: IntentHandler);
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
    registerIntentHandler(name: string, handler: IntentHandler): void;
    handlerRegistered(name: string, handler: IntentHandler): boolean;
}
