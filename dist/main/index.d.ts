import { AlexaResponse } from './response/AlexaResponse';
export declare class UtterUnderstanding {
    static ModuleName: string;
    private logger;
    private handlers;
    private unknownRequestHandler;
    static handler(event: any, context: any): Promise<AlexaResponse>;
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
export declare function handler(event: any, context: any): void;
