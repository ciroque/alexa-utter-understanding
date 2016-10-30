import {Logger} from './Logger';
import {AlexaResponse} from './AlexaResponse';
import IRequestHandlerMap from './handlers/IRequestHandlerMap';
import {IntentRequestHandler} from './handlers/IntentRequestHandler';
import {LaunchRequestHandler} from './handlers/LaunchRequestHandler';
import {EndSessionRequestHandler} from './handlers/EndSessionRequestHandler';
import IRequestHandler from './handlers/IRequestHandler';
import {UnknownRequestHandler} from './handlers/UnknownRequestHandler';

export class UtterUnderstanding {
    public static ModuleName = 'UtterUnderstanding';

    private logger: Logger = new Logger(UtterUnderstanding.ModuleName);
    private handlers: IRequestHandlerMap = {};
    private unknownRequestHandler: IRequestHandler;

    static handler(event: any, context: any): Promise<AlexaResponse> {
        return new UtterUnderstanding().handleRequest(event, context);
    }

    constructor() {
        this.logger = new Logger(UtterUnderstanding.ModuleName);
        this.handlers['IntentRequest'] = new IntentRequestHandler();
        this.handlers['LaunchRequest'] = new LaunchRequestHandler();
        this.handlers['EndSessionRequest'] = new EndSessionRequestHandler();
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
        .then((response: AlexaResponse) => {
            context.succeed(response);
        })
        .catch((error) => {
            context.fail(error);
        });
}
