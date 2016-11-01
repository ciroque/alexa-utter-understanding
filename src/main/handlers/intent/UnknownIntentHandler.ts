import {AlexaResponse} from '../../response/AlexaResponse';
import {UnknownIntentResponse} from '../../response/predefined/UnknownIntentResponse';
import {IntentHandler} from './IntentHandler';

export class UnknownIntentHandler extends IntentHandler {
    constructor() {
        super('UnknownIntentHandler');
    }

    handleIntent(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling unknown intent');
        return new Promise((resolve: any) => { resolve(UnknownIntentResponse.getInstance({}, true)); });
    }
}
