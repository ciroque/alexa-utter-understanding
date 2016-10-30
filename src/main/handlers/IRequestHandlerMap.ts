import IRequestHandler from './IRequestHandler';

// map a string to a function that returns a Promise of an AlexaResponse
interface IRequestHandlerMap {
    [requestType: string]: IRequestHandler;
}

export default IRequestHandlerMap;
