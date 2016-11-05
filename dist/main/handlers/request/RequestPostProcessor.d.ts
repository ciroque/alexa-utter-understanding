import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
import { Logger } from '../../Logger';
export declare abstract class RequestPostProcessor {
    protected logger: Logger;
    constructor(name: string);
    abstract handleRequest(event: any, context: any, response: SpeechletResponseEnvelope): Promise<SpeechletResponseEnvelope>;
}
