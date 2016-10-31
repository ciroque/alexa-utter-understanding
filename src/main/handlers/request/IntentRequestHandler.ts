import {AlexaResponse} from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
import {Logger} from '../../Logger';
import {AmazonHelpIntentHandler} from '../intent/AmazonHelpIntentHandler';
import {UnknownIntentHandler} from '../intent/UnknownIntentHandler';

export class IntentRequestHandler implements IRequestHandler {
    private logger: Logger;
    private intentHandlers: IRequestHandler[] = [];
    private defaultIntentHandler: IRequestHandler;

    constructor() {
        this.logger = new Logger('IntentRequestHandler');
        this.defaultIntentHandler = new UnknownIntentHandler();
        this.intentHandlers['AMAZON.HelpIntent'] = new AmazonHelpIntentHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        let handler = this.intentHandlers[event.request.intent.name] || this.defaultIntentHandler;
        return handler.handleRequest(event, context);
    }
}
