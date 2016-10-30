import { AlexaResponse } from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
export declare class UnknownRequestHandler implements IRequestHandler {
    static didNotUnderstandText: string;
    private logger;
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
