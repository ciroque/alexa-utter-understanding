import {Logger} from '../../Logger';
import {AlexaResponse} from '../../response/AlexaResponse';
export abstract class IntentHandler {
    protected logger: Logger;

    constructor(protected name: string) {
        this.logger = new Logger(name);
    }

    public abstract handleIntent(event: any, context: any): Promise<AlexaResponse>;
}
