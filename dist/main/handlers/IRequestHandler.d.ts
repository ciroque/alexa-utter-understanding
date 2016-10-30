import { AlexaResponse } from '../AlexaResponse';
/**
 * Created by swagner on 10/29/16.
 */
interface IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
export default IRequestHandler;
