import { AlexaResponse } from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
export declare class EndSessionRequestHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
