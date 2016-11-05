import {RequestPostProcessor} from '../main/handlers/request/RequestPostProcessor';
import {SpeechletResponseEnvelope} from '../main/response/SpeechletResponseEnvelope';

export class MockRequestPostProcessor extends RequestPostProcessor {
    private requesthandled = false;

    constructor(private response: any) {
        super('MockRequestPostProcessor');
    }

    public get handled(): boolean {
        return this.requesthandled;
    }

    handleRequest(event: any, context: any, response: SpeechletResponseEnvelope): Promise<SpeechletResponseEnvelope> {
        this.logger.debug(
            `Post-processing __EVT(${JSON.stringify(event)}), __CTXT(${JSON.stringify(context)}, __RESP(${JSON.stringify(response)}))`
        );
        this.requesthandled = true;
        return new Promise((resolve: any, reject: any) => {
            if (this.response instanceof SpeechletResponseEnvelope) {
                this.logger.debug(`RESOLVING __VALUE(${JSON.stringify(this.response)})`);
                resolve(this.response);
            } else {
                this.logger.debug(`REJECTING __VALUE(${JSON.stringify(this.response)})`);
                reject(this.response);
            }
        });
    }
}
