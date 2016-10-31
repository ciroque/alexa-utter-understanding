import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';
import {AmznHelpIntentResponse} from '../../response/predefined/AmznHelpIntentResponse';
import {Logger} from '../../Logger';

export class AmazonHelpIntentHandler implements IRequestHandler {
    private logger = new Logger('AmazonHelpIntentHandler');
    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug('handling help intent');
        return new Promise((resolve: any) => { resolve(AmznHelpIntentResponse.getInstance({}, true)); });
    }
}
