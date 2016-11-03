import {AlexaResponse} from '../../response/AlexaResponse';
import {RequestHandler} from './RequestHandler';

export default class NullRequestHandler extends RequestHandler {
    constructor() {
        super('NullRequestHandler');
    }

    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling request');
        return new Promise((resolve: any) => { resolve({}); });
    }
}
