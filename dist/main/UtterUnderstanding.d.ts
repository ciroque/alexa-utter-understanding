import { RequestPostProcessor } from './handlers/request/RequestPostProcessor';
import IRequestHandler from './handlers/IRequestHandler';
import { AlexaResponse } from './response/AlexaResponse';
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
    registerPreProcessHandler(handler: IRequestHandler): void;
    registerRequestHandler(requestName: string, handler: IRequestHandler): void;
    registerPostProcessHandler(handler: RequestPostProcessor): void;
}
