import {RequestPostProcessor} from './RequestPostProcessor';
import {AlexaResponse} from '../../response/AlexaResponse';

export default class DefaultRequestPostProcessor extends RequestPostProcessor {

    constructor() {
        super('DefaultRequestPostProcessor');
    }

    handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse> {
        this.logger.debug('Returning the given response.');
        return new Promise((resolve: any) => { resolve(response); });
    }
}