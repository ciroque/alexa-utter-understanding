import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';
import {Logger} from '../../Logger';

export default class NullRequestHandler implements IRequestHandler {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NullRequestHandler');
    }

    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling request');
        return new Promise((resolve: any) => { resolve({}); });
    }
}
