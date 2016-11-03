import {AlexaResponse} from '../../response/AlexaResponse';
import {UnknownIntentHandler} from '../intent/UnknownIntentHandler';
import {IntentHandler} from '../intent/IntentHandler';
import {RequestHandler} from './RequestHandler';

export class IntentRequestHandler extends RequestHandler {
    private intentHandlers: IntentHandler[] = [];
    private defaultHandler: IntentHandler;

    constructor(unknownIntentHandler?: IntentHandler) {
        super('IntentRequestHandler');
        this.defaultHandler = unknownIntentHandler || new UnknownIntentHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        let handler = this.intentHandlers[event.request.intent.name] || this.defaultHandler;
        return handler.handleIntent(event, context);
    }

    public registerIntentHandler(name: string, handler: IntentHandler): void {
        this.logger.debug(`Registering Intent handler for '${name}'.`);
        this.intentHandlers[name] = handler;
    }

    public handlerRegistered(name: string, handler: IntentHandler): boolean {
        return this.intentHandlers[name] === handler;
    }
}
