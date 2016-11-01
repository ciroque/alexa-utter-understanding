import IRequestHandler from '../main/handlers/IRequestHandler';
import {AlexaResponse} from '../main/response/AlexaResponse';
import {Logger} from '../main/Logger';

export default class MockRequestHandler implements IRequestHandler {
    private logger = new Logger('MockRequestHandler');
    private response: AlexaResponse;
    private requestHandled = false;

    constructor(response?: any) {
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
