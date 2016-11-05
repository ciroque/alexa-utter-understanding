import {OutputSpeech} from './speech/OutputSpeech';
import {Card} from './speech/Card';
import {Reprompt} from './speech/Reprompt';

export class SpeechletResponse {
    public static get defaultInstance(): SpeechletResponse {
        let outputSpeech = OutputSpeech.defaultInstance;
        let card = Card.defaultInstance;
        let reprompt = Reprompt.defaultInstance;
        return new SpeechletResponse(outputSpeech, card, reprompt, true);
    }

    constructor(
        public outputSpeech: OutputSpeech,
        public card: Card,
        public reprompt: Reprompt,
        public shouldEndSession: boolean
    ) {}
}
