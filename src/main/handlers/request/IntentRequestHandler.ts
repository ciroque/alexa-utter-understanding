import {AlexaResponse} from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
import {Logger} from '../../Logger';
import {UnknownRequestHandler} from './UnknownRequestHandler';
import {AmazonHelpIntentHandler} from '../intent/AmazonHelpIntentHandler';

export class IntentRequestHandler implements IRequestHandler {
    private logger: Logger;
    private intentHandlers: IRequestHandler[] = [];
    private defaulIntentHandler: IRequestHandler;

    constructor() {
        this.logger = new Logger('IntentRequestHandler');
        this.defaulIntentHandler = new UnknownRequestHandler();
        this.intentHandlers['AMAZON.HelpIntent'] = new AmazonHelpIntentHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);

        return new Promise((resolve: any) => {
            let response = AlexaResponse.defaultInstance;
            this.logger.debug(`handleRequest returning ${JSON.stringify(response)}`);
            resolve(response);
        });
    }
}
