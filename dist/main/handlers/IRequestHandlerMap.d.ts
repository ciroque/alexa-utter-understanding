import IRequestHandler from './IRequestHandler';
interface IRequestHandlerMap {
    [requestType: string]: IRequestHandler;
}
export default IRequestHandlerMap;
