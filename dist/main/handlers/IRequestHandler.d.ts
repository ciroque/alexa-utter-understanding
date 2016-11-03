import { AlexaResponse } from '../response/AlexaResponse';
interface IRequestHandler {
    handleRequest(event: any, context: any): Promise<AlexaResponse>;
}
export default IRequestHandler;
