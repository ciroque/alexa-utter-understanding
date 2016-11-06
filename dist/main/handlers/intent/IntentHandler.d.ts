import { Logger } from '../../Logger';
import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
export declare abstract class IntentHandler {
    protected name: string;
    intentName: string;
    protected logger: Logger;
    constructor(name: string, intentName?: string);
    abstract handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
