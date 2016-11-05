import { Logger } from '../../Logger';
import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
export declare abstract class IntentHandler {
    protected name: string;
    protected logger: Logger;
    constructor(name: string);
    abstract handleIntent(event: any, context: any): Promise<SpeechletResponseEnvelope>;
}
