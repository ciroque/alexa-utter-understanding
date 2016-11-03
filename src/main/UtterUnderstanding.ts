import {RequestPostProcessor} from './handlers/request/RequestPostProcessor';
import {AlexaResponse} from './response/AlexaResponse';
import NullRequestPostProcessor from './handlers/request/NullRequestPostProcessor';
import NullRequestHandler from './handlers/request/NullRequestHandler';
import {UnknownRequestHandler} from './handlers/request/UnknownRequestHandler';
import {SessionEndedRequestHandler} from './handlers/request/SessionEndedRequestHandler';
import RequestNames from './handlers/request/RequestNames';
import {LaunchRequestHandler} from './handlers/request/LaunchRequestHandler';
import {IntentRequestHandler} from './handlers/request/IntentRequestHandler';
import {Logger} from './Logger';
import IRequestHandlerMap from './handlers/IRequestHandlerMap';
import {RequestHandler} from './handlers/request/RequestHandler';

export class UtterUnderstanding {
    private ModuleName = 'UtterUnderstanding';

    private logger: Logger = new Logger(this.ModuleName);
    private handlers: IRequestHandlerMap = {};
    private unknownRequestHandler: RequestHandler;
    private preProcessor: RequestHandler;
    private postProcessor: RequestPostProcessor;

    static handler(event: any, context: any): Promise<AlexaResponse> {
        return new UtterUnderstanding().handleRequest(event, context);
    }

    constructor() {
        this.logger = new Logger(this.ModuleName);
        this.handlers[RequestNames.IntentRequest] = new IntentRequestHandler();
        this.handlers[RequestNames.LaunchRequest] = new LaunchRequestHandler();
        this.handlers[RequestNames.SessionEndedRequest] = new SessionEndedRequestHandler();
        this.unknownRequestHandler = new UnknownRequestHandler();
        this.preProcessor = new NullRequestHandler();
        this.postProcessor = new NullRequestPostProcessor();
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)}, __CONTEXT(${JSON.stringify(context)}))`);
        let result: Promise<AlexaResponse>;

        try {
            result = this.preProcessor
                .handleRequest(event, context)
                .then(() => {
                    let handler: RequestHandler = this.handlers[event.request.type] || this.unknownRequestHandler;
                    return handler.handleRequest(event, context);
                })
                .then((response: AlexaResponse) => {
                    return this.postProcessor.handleRequest(event, context, response);
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

    public registerPreProcessHandler(handler: RequestHandler): void {
        this.preProcessor = handler;
    }

    public registerRequestHandler(requestName: string, handler: RequestHandler): void {
        this.handlers[requestName] = handler;
    }

    registerPostProcessHandler(handler: RequestPostProcessor) {
        this.postProcessor = handler;
    }
}

