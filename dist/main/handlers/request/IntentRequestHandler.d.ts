import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { IntentHandler } from '../intent/IntentHandler';
import { RequestHandler } from './RequestHandler';
export declare class IntentRequestHandler extends RequestHandler {
    private intentHandlers;
    private defaultHandler;
    constructor(unknownIntentHandler?: IntentHandler);
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
    /**
     * @deprecated since version 1.1.12, use the defineIntentHandler instead.
     */
    registerIntentHandler(name: string, handler: IntentHandler): void;
    /**
     * @deprecated since version 1.1.12, use the handlerDefined instead.
     */
    handlerRegistered(name: string, handler: IntentHandler): boolean;
    defineIntentHandler(handler: IntentHandler): void;
    handlerDefined(handler: IntentHandler): boolean;
}
