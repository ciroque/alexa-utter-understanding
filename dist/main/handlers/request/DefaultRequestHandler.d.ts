import { AlexaResponse } from '../../response/AlexaResponse';
import { RequestHandler } from './RequestHandler';
export default class DefaultRequestHandler extends RequestHandler {
    constructor();
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
