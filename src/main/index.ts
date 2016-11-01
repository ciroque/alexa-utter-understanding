import {Logger} from './Logger';
import {AlexaResponse} from './response/AlexaResponse';
import IRequestHandlerMap from './handlers/IRequestHandlerMap';
import {IntentRequestHandler} from './handlers/request/IntentRequestHandler';
import {LaunchRequestHandler} from './handlers/request/LaunchRequestHandler';
import {SessionEndedRequestHandler} from './handlers/request/SessionEndedRequestHandler';
import IRequestHandler from './handlers/IRequestHandler';
import {UnknownRequestHandler} from './handlers/request/UnknownRequestHandler';
import NullRequestHandler from './handlers/request/NullRequestHandler';

export class UtterUnderstanding {
    private ModuleName = 'UtterUnderstanding';

    private logger: Logger = new Logger(this.ModuleName);
    private handlers: IRequestHandlerMap = {};
    private unknownRequestHandler: IRequestHandler;
    private preProcessor: IRequestHandler;

    static handler(event: any, context: any): Promise<AlexaResponse> {
        return new UtterUnderstanding().handleRequest(event, context);
    }

    constructor() {
        this.logger = new Logger(this.ModuleName);
        this.handlers['IntentRequest'] = new IntentRequestHandler();
        this.handlers['LaunchRequest'] = new LaunchRequestHandler();
        this.handlers['SessionEndedRequest'] = new SessionEndedRequestHandler();
        this.unknownRequestHandler = new UnknownRequestHandler();
        this.preProcessor = new NullRequestHandler();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)}, __CONTEXT(${JSON.stringify(context)}))`);
        let result: Promise<AlexaResponse>;

        try {
            result = this.preProcessor
                .handleRequest(event, context)
                .then(() => {
                    let handler: IRequestHandler = this.handlers[event.request.type] || this.unknownRequestHandler;
                    return handler.handleRequest(event, context);
                })
                .catch((error: any) => {
                    return new Promise((_: any, reject: any) => { reject(error); });
                });

        } catch (error) {
            this.logger.error(`${error}`);
            result = new Promise((_: any, reject: any) => { reject(error); });
        }

        return result;
    }

    public registerPreProcessHandler(handler: IRequestHandler): void {
        this.preProcessor = handler;
    }

    public registerRequestHandler(requestName: string, handler: IRequestHandler): void {
        this.handlers[requestName] = handler;
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
