import { AlexaResponse } from '../response/AlexaResponse';
import IRequestHandler from './IRequestHandler';
/**
 * Created by swagner on 10/29/16.
 */
export declare class LaunchRequestHandler implements IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
