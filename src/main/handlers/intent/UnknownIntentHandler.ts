import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';
import {UnknownIntentResponse} from '../../response/predefined/UnknownIntentResponse';
import {Logger} from '../../Logger';

export class UnknownIntentHandler implements IRequestHandler {
    private logger = new Logger('UnknownIntentHandler');
    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling unknown intent');
        return new Promise((resolve: any) => { resolve(UnknownIntentResponse.getInstance({}, true)); });
    }
}
