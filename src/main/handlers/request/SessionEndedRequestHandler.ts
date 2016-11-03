import {AlexaResponse} from '../../response/AlexaResponse';
import {RequestHandler} from './RequestHandler';

export class SessionEndedRequestHandler extends RequestHandler {
    constructor() {
        super('SessionEndedRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('Ending Session');
        return new Promise((resolve: any) => {
            resolve(AlexaResponse.defaultInstance);
        });
    }
}
