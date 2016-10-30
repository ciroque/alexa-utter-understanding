import IRequestHandler from './IRequestHandler';
/**
 * Created by swagner on 10/29/16.
 */
interface IRequestHandlerMap {
    [requestType: string]: IRequestHandler;
}
export default IRequestHandlerMap;
