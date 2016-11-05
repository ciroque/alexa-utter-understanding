import {SpeechletResponseEnvelope} from '../../response/SpeechletResponseEnvelope';
import {RequestHandler} from './RequestHandler';

export default class DefaultRequestHandler extends RequestHandler {
    constructor() {
        super('DefaultRequestHandler');
    }

    handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        this.logger.debug('handling request');
        return new Promise((resolve: any) => { resolve({}); });
    }
}
