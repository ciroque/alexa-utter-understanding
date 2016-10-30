import {SpeechletResponse} from './SpeechletResponse';
export class AlexaResponse {
    public version = '1.0';

    public static get defaultInstance(): AlexaResponse {
        let speechletResponse = SpeechletResponse.defaultInstance;
        return new AlexaResponse(speechletResponse, {});
    }

    constructor(public response: SpeechletResponse, sessionAttributes: any) { }
}
