import {AlexaResponse} from '../../response/AlexaResponse';
import {RequestHandler} from './RequestHandler';

export class LaunchRequestHandler extends RequestHandler {
    constructor() {
        super('LaunchRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }
}
