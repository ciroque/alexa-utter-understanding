import { RequestPostProcessor } from './RequestPostProcessor';
import { AlexaResponse } from '../../response/AlexaResponse';
export default class DefaultRequestPostProcessor extends RequestPostProcessor {
    constructor();
    handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse>;
}
