import { AlexaResponse } from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
export declare class SessionEndedRequestHandler implements IRequestHandler {
    private logger;
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
