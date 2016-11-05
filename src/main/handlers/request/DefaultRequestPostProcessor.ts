import {RequestPostProcessor} from './RequestPostProcessor';
import {SpeechletResponseEnvelope} from '../../response/SpeechletResponseEnvelope';

export default class DefaultRequestPostProcessor extends RequestPostProcessor {

    constructor() {
        super('DefaultRequestPostProcessor');
    }

    handleRequest(event: any, context: any, response: SpeechletResponseEnvelope): Promise<SpeechletResponseEnvelope> {
        this.logger.debug('Returning the given response.');
        return new Promise((resolve: any) => { resolve(response); });
    }
}
