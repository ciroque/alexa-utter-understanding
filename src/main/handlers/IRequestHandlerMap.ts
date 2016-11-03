import {RequestHandler} from './request/RequestHandler';

// map a string to a function that returns a Promise of an AlexaResponse
interface IRequestHandlerMap {
    [requestType: string]: RequestHandler;
}

export default IRequestHandlerMap;
