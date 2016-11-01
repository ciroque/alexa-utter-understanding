import IRequestHandler from '../IRequestHandler';
import {AlexaResponse} from '../../response/AlexaResponse';

export default class NullRequestHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        return new Promise((resolve: any) => { resolve({}); });
    }
}
