import {SpeechletOutputSpeech} from './SpeechletOutputSpeech';
import {SpeechletCard} from './SpeechletCard';
import {SpeechletReprompt} from './SpeechletReprompt';

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
