import { AlexaResponse } from '../response/AlexaResponse';
/**
 * Created by swagner on 10/29/16.
 */
interface IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
export default IRequestHandler;
