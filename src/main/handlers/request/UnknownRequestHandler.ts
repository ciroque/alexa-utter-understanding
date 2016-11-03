import {AlexaResponse} from '../../response/AlexaResponse';
import {UnknownRequestResponse} from '../../response/predefined/UnknownRequestResponse';
import {RequestHandler} from './RequestHandler';

export class UnknownRequestHandler extends RequestHandler {
    public static didNotUnderstandText = 'I did not understand the request.';

    constructor() {
        super('UnknownRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve: any) => { resolve(UnknownRequestResponse.getInstance({}, true)); });
    }
}
