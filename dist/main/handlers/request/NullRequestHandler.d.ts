import IRequestHandler from '../IRequestHandler';
import { AlexaResponse } from '../../response/AlexaResponse';
export default class NullRequestHandler implements IRequestHandler {
    private logger;
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
