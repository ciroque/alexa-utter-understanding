import {Logger} from './Logger';
import {AlexaResponse} from './response/AlexaResponse';
import IRequestHandlerMap from './handlers/IRequestHandlerMap';
import {IntentRequestHandler} from './handlers/request/IntentRequestHandler';
import {LaunchRequestHandler} from './handlers/request/LaunchRequestHandler';
import {SessionEndedRequestHandler} from './handlers/request/SessionEndedRequestHandler';
import IRequestHandler from './handlers/IRequestHandler';
import {UnknownRequestHandler} from './handlers/request/UnknownRequestHandler';

export class UtterUnderstanding {
    private ModuleName = 'UtterUnderstanding';

    private logger: Logger = new Logger(this.ModuleName);
    private handlers: IRequestHandlerMap = {};
    private unknownRequestHandler: IRequestHandler;

    static handler(event: any, context: any): Promise<AlexaResponse> {
        return new UtterUnderstanding().handleRequest(event, context);
    }

    constructor() {
        this.logger = new Logger(this.ModuleName);
        this.handlers['IntentRequest'] = new IntentRequestHandler();
        this.handlers['LaunchRequest'] = new LaunchRequestHandler();
        this.handlers['SessionEndedRequest'] = new SessionEndedRequestHandler();
        this.unknownRequestHandler = new UnknownRequestHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        let result: Promise<AlexaResponse>;

        try {
            this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)}, __CONTEXT(${JSON.stringify(context)}))`);
            let handler: IRequestHandler = this.handlers[event.request.type] || this.unknownRequestHandler;
            result = handler.handleRequest(event, context);
        } catch (error) {
            this.logger.error(`${error}`);
            result = new Promise((_: any, reject: any) => { reject(error); });
        }

        return result;
    }
}

export function handler(event: any, context: any) {
    UtterUnderstanding
        .handler(event, context)
        .then((response: any) => {
            context.succeed(response);
        })
        .catch((error) => {
            context.fail(error);
        });
}
