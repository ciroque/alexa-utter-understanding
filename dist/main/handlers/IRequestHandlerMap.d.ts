import { RequestHandler } from './request/RequestHandler';
interface IRequestHandlerMap {
    [requestType: string]: RequestHandler;
}
export default IRequestHandlerMap;
