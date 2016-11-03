import { AlexaResponse } from '../../response/AlexaResponse';
import { IntentHandler } from './IntentHandler';
export declare class UnknownIntentHandler extends IntentHandler {
    constructor();
    handleIntent(event: any, context: any): Promise<AlexaResponse>;
}
