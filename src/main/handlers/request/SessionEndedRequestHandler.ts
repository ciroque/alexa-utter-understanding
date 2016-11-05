import {SpeechletResponseEnvelope} from '../../response/SpeechletResponseEnvelope';
import {RequestHandler} from './RequestHandler';

export class SessionEndedRequestHandler extends RequestHandler {
    constructor() {
        super('SessionEndedRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        this.logger.debug('Ending Session');
        return new Promise((resolve: any) => {
            resolve(SpeechletResponseEnvelope.defaultInstance);
        });
    }
}
