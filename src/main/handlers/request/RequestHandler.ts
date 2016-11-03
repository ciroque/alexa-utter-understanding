import {AlexaResponse} from '../../response/AlexaResponse';
import {Logger} from '../../Logger';

export abstract class RequestHandler {
    protected logger: Logger;

    constructor(protected name: string) {
        this.logger = new Logger(name);
    }

    public abstract handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
