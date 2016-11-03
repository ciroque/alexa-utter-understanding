import {AlexaResponse} from '../main/response/AlexaResponse';
import {RequestHandler} from '../main/handlers/request/RequestHandler';

export default class MockRequestHandler extends RequestHandler {
    private response: AlexaResponse;
    private requestHandled = false;

    constructor(response?: any) {
        super('MockRequestHandler');
        this.response = response;
    }

    get handled(): boolean {
        return this.requestHandled;
    }

    handleRequest(event: any, context: any): Promise<AlexaResponse> {
        this.requestHandled = true;
        return new Promise((resolve: any, reject: any) => {
            if (this.response instanceof AlexaResponse) {
                this.logger.debug(`RESOLVING __VALUE(${JSON.stringify(this.response)})`);
                resolve(this.response);
            } else {
                this.logger.debug(`REJECTING __VALUE(${JSON.stringify(this.response)})`);
                reject(this.response);
            }
        });
    }
}
