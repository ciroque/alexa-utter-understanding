import {AlexaResponse} from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
import {Logger} from '../Logger';

export class IntentRequestHandler implements IRequestHandler {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('IntentRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve: any, reject: any) => {
            resolve(AlexaResponse.defaultInstance);
        });
    }
}
