import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { RequestHandler } from './RequestHandler';
export default class DefaultRequestHandler extends RequestHandler {
    constructor();
    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
