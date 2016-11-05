import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { RequestHandler } from './RequestHandler';
export declare class DefaultLaunchRequestHandler extends RequestHandler {
    constructor();
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
