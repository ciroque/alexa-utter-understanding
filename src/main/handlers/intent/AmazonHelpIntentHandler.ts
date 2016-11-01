import {AlexaResponse} from '../../response/AlexaResponse';
import {AmznHelpIntentResponse} from '../../response/predefined/AmznHelpIntentResponse';
import {IntentHandler} from './IntentHandler';

export class AmazonHelpIntentHandler extends IntentHandler {
    constructor() {
        super('AmazonHelpIntentHandler');
    }

    handleIntent(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling help intent');
        return new Promise((resolve: any) => { resolve(AmznHelpIntentResponse.getInstance({}, true)); });
    }
}
