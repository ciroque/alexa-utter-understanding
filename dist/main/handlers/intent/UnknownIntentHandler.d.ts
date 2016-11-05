import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { IntentHandler } from './IntentHandler';
export declare class UnknownIntentHandler extends IntentHandler {
    constructor();
    handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
