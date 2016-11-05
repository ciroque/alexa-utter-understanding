import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { IntentHandler } from '../intent/IntentHandler';
import { RequestHandler } from './RequestHandler';
export declare class IntentRequestHandler extends RequestHandler {
    private intentHandlers;
    private defaultHandler;
    constructor(unknownIntentHandler?: IntentHandler);
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
    registerIntentHandler(name: string, handler: IntentHandler): void;
    handlerRegistered(name: string, handler: IntentHandler): boolean;
}
