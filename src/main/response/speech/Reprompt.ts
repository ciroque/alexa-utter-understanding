import {OutputSpeech} from './OutputSpeech';

export class Reprompt {
    public static get defaultInstance(): Reprompt {
        return new Reprompt(OutputSpeech.defaultInstance);
    }

    constructor(public outputSpeech: OutputSpeech) {}
}
