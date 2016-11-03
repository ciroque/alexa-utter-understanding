import { AlexaResponse } from '../../response/AlexaResponse';
import { Logger } from '../../Logger';
export declare abstract class RequestHandler {
    protected name: string;
    protected logger: Logger;
    constructor(name: string);
    abstract handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
