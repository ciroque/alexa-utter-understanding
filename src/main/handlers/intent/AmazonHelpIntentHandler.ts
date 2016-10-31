import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';
import {AmznHelpIntentResponse} from '../../response/predefined/AmznHelpIntentResponse';

export class AmazonHelpIntentHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any) => { resolve(AmznHelpIntentResponse.getInstance({}, true)); });
    }
}
