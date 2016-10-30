import {AlexaResponse} from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';

export class EndSessionRequestHandler implements IRequestHandler {
    public handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }
}
