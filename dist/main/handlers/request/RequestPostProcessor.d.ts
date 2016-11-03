import { AlexaResponse } from '../../response/AlexaResponse';
import { Logger } from '../../Logger';
export declare abstract class RequestPostProcessor {
    protected logger: Logger;
    constructor(name: string);
    abstract handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse>;
}
