import {AlexaResponse} from '../../response/AlexaResponse';
import {Logger} from '../../Logger';

export abstract class RequestPostProcessor {
    protected logger: Logger;

    constructor(name: string) {
        this.logger = new Logger(name);
    }

    abstract handleRequest(event: any, context: any, response: AlexaResponse): Promise<AlexaResponse>;
}
