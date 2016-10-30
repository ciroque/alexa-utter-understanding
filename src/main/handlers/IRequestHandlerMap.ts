import IRequestHandler from './IRequestHandler';
/**
 * Created by swagner on 10/29/16.
 */

// map a string to a function that returns a Promise of an AlexaResponse
interface IRequestHandlerMap {
    [requestType: string]: IRequestHandler;
}

export default IRequestHandlerMap;
