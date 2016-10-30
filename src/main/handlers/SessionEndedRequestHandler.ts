import {AlexaResponse} from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
import {Logger} from '../Logger';

export class SessionEndedRequestHandler implements IRequestHandler {
    private logger = new Logger('SessionEndedRequestHandler');

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('Ending Session');
        return new Promise((resolve: any) => {
            resolve(AlexaResponse.defaultInstance);
        });
    }
}
