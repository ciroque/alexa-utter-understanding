import {Logger} from './Logger';
import {AlexaResponse} from './AlexaResponse';

// map a string to a function that returns a Promise of an AlexaResponse
interface IRequestHandlerMap {
    [requestType: string]: (event: any, context: any) => Promise<AlexaResponse>;
}

export class UtterUnderstanding {
    private logger: Logger = new Logger('UtterUnderstanding');
    private handlers: IRequestHandlerMap = {};

    static handler(event: any, context: any) {
        new UtterUnderstanding().handleRequest(event, context);
    }

    constructor() {
        this.handlers['IntentRequest'] = this.handleIntent;
        this.handlers['LaunchRequest'] = this.handleLaunch;
        this.handlers['EndSessionRequest'] = this.handleEndSession;
    }

    public handleRequest(event: any, context: any): void {
        try {
            let handler: (event: any, context: any) => Promise<AlexaResponse> =
                this.handlers[event.request.type] || this.handleDefault;

            handler(event, context)
                .then((response: AlexaResponse) => context.succeed(response))
                .catch((error: any) => context.fail(error));
        } catch (error) {
            this.logger.error(error);
            context.fail('Something went horribly horribly wrong.');
        }
    }

    private handleDefault(): Promise<AlexaResponse> {
        this.logger.debug('UtterUnderstanding::handleDefault');
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }

    private handleEndSession(): Promise<AlexaResponse> {
        this.logger.debug('UtterUnderstanding::handleEndSession');
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }

    private handleIntent(): Promise<AlexaResponse> {
        this.logger.debug('UtterUnderstanding::handleIntent');
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }

    private handleLaunch(): Promise<AlexaResponse> {
        this.logger.debug('UtterUnderstanding::handleLaunch');
        return new Promise((resolve: any, reject: any) => {
            reject('Not Implemented');
        });
    }
}

export function handler(event: any, context: any) {
    UtterUnderstanding.handler(event, context);
}
