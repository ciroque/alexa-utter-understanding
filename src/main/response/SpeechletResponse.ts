import {SpeechletOutputSpeech} from './speech/OutputSpeech';
import {SpeechletCard} from './speech/Card';
import {SpeechletReprompt} from './speech/Reprompt';

export class SpeechletResponse {

    public static get defaultInstance(): SpeechletResponse {
        let outputSpeech = SpeechletOutputSpeech.defaultInstance;
        let card = SpeechletCard.defaultInstance;
        let reprompt = SpeechletReprompt.defaultInstance;
        return new SpeechletResponse(outputSpeech, card, reprompt, true);
    }

    constructor(
        public outputSpeech: SpeechletOutputSpeech,
        public card: SpeechletCard,
        public reprompt: SpeechletReprompt,
        public shouldEndSession: boolean
    ) {}
}
