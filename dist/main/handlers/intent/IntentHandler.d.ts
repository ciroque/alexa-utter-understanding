import { Logger } from '../../Logger';
import { AlexaResponse } from '../../response/AlexaResponse';
export declare abstract class IntentHandler {
    protected name: string;
    protected logger: Logger;
    constructor(name: string);
    abstract handleIntent(event: any, context: any): Promise<AlexaResponse>;
}
