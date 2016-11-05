import {SpeechletResponseEnvelope} from '../../response/SpeechletResponseEnvelope';
import {RequestHandler} from './RequestHandler';

export class DefaultLaunchRequestHandler extends RequestHandler {
    constructor() {
        super('DefaultLaunchRequestHandler');
    }

    public handleRequest(event: any, context: any): Promise<SpeechletResponseEnvelope> {
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }
}
