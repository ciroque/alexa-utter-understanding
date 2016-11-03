import {RequestPostProcessor} from './RequestPostProcessor';
import {AlexaResponse} from '../../response/AlexaResponse';

export default class NullRequestPostProcessor extends RequestPostProcessor {

    constructor() {
        super('NullRequestPostProcessor');
    }

    handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse> {
        this.logger.debug('Returning the given response.');
        return new Promise((resolve: any) => { resolve(response); });
    }
}
