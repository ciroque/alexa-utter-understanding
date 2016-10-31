import {AlexaResponse} from '../../response/AlexaResponse';
import IRequestHandler from '../IRequestHandler';
import {Logger} from '../../Logger';
import {UnknownRequestResponse} from '../../response/predefined/UnknownRequestResponse';

export class UnknownRequestHandler implements IRequestHandler {
    public static didNotUnderstandText = 'I did not understand the request.';
    private logger = new Logger('UnknownRequestHandler');

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.logger.debug(`handleRequest __EVENT(${JSON.stringify(event)})`);
        return new Promise((resolve: any) => { resolve(UnknownRequestResponse.getInstance({}, true)); });
    }
}
