import {SpeechletResponse} from './SpeechletResponse';

export class SpeechletResponseEnvelope {
    public version = '1.0';

    public static get defaultInstance(): SpeechletResponseEnvelope {
        let speechletResponse = SpeechletResponse.defaultInstance;
        return new SpeechletResponseEnvelope(speechletResponse, {});
    }

    constructor(public response: SpeechletResponse, sessionAttributes: any) { }
}
