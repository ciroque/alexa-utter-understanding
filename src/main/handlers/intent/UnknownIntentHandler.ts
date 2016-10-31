import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';
import {UnknownIntentResponse} from '../../response/predefined/UnknownIntentResponse';

export class UnknownIntentHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any) => { resolve(UnknownIntentResponse.getInstance({}, true)); });
    }
}
