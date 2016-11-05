import {SpeechletOutputSpeech} from './OutputSpeech';

export class SpeechletReprompt {
    public static get defaultInstance(): SpeechletReprompt {
        return new SpeechletReprompt(SpeechletOutputSpeech.defaultInstance);
    }

    constructor(public outputSpeech: SpeechletOutputSpeech) {}
}
