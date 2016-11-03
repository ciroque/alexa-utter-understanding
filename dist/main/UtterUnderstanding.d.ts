import { RequestPostProcessor } from './handlers/request/RequestPostProcessor';
import { AlexaResponse } from './response/AlexaResponse';
import { RequestHandler } from './handlers/request/RequestHandler';
export declare class UtterUnderstanding {
    private ModuleName;
    private logger;
    private handlers;
    private unknownRequestHandler;
    private preProcessor;
    private postProcessor;
    static handler(event: any, context: any): Promise<AlexaResponse>;
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
    registerPreProcessHandler(handler: RequestHandler): void;
    registerRequestHandler(requestName: string, handler: RequestHandler): void;
    registerPostProcessHandler(handler: RequestPostProcessor): void;
}
