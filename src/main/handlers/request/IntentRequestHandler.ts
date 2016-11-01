import {AlexaResponse} from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
import {Logger} from '../../Logger';
import {UnknownIntentHandler} from '../intent/UnknownIntentHandler';
import {IntentHandler} from '../intent/IntentHandler';

export class IntentRequestHandler implements IRequestHandler {
    private logger: Logger;
    private intentHandlers: IntentHandler[] = [];
    private defaultHandler: IntentHandler;

    constructor(unknownIntentHandler?: IntentHandler) {
        this.logger = new Logger('IntentRequestHandler');
        this.defaultHandler = unknownIntentHandler || new UnknownIntentHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        let handler = this.intentHandlers[event.request.intent.name] || this.defaultHandler;
        return handler.handleIntent(event, context);
    }

    public registerIntentHandler(name: string, handler: IntentHandler): void {
        this.intentHandlers[name] = handler;
    }

    public handlerRegistered(name: string, handler: IntentHandler): boolean {
        return this.intentHandlers[name] === handler;
    }
}
