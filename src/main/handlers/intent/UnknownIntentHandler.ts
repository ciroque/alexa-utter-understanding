import {SpeechletResponseEnvelope} from '../../response/SpeechletResponseEnvelope';
import {UnknownIntentResponse} from '../../response/predefined/UnknownIntentResponse';
import {IntentHandler} from './IntentHandler';

export class UnknownIntentHandler extends IntentHandler {
    constructor() {
        super('UnknownIntentHandler');
    }

    handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        this.logger.debug('handling unknown intent');
        return new Promise((resolve: any) => { resolve(UnknownIntentResponse.getInstance({}, true)); });
    }
}
