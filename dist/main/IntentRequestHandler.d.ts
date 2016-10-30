import { AlexaResponse } from './AlexaResponse';
import IRequestHandler from './IRequestHandler';
/**
 * Created by swagner on 10/29/16.
 */
export declare class IntentRequestHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
