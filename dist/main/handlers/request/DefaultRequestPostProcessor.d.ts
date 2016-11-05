import { RequestPostProcessor } from './RequestPostProcessor';
import { SpeechletResponseEnvelope } from '../../response/SpeechletResponseEnvelope';
export default class DefaultRequestPostProcessor extends RequestPostProcessor {
    constructor();
    handleRequest(event: any, context: any, response: SpeechletResponseEnvelope): Promise<SpeechletResponseEnvelope>;
}
