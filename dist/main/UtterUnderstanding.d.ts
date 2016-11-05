import { RequestPostProcessor } from './handlers/request/RequestPostProcessor';
import { SpeechletResponseEnvelope } from './response/SpeechletResponseEnvelope';
import { RequestHandler } from './handlers/request/RequestHandler';
export declare class UtterUnderstanding {
    private ModuleName;
    private logger;
    private handlers;
    private unknownRequestHandler;
    private preProcessor;
    private postProcessor;
    static handler(event: any, context: any): Promise<SpeechletResponseEnvelope>;
    constructor();
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
    registerPreProcessHandler(handler: RequestHandler): void;
    registerRequestHandler(requestName: string, handler: RequestHandler): void;
    registerPostProcessHandler(handler: RequestPostProcessor): void;
}
