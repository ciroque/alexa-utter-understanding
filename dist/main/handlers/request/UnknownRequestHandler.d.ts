import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { RequestHandler } from './RequestHandler';
export declare class UnknownRequestHandler extends RequestHandler {
    static didNotUnderstandText: string;
    constructor();
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
