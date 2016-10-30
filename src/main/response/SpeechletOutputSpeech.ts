export class SpeechletOutputSpeech {
    public static get defaultInstance(): SpeechletOutputSpeech {
        return new SpeechletOutputSpeech('Default Speechlet Output');
    }

    constructor(public text: string, public type = 'PlainText') {}
}
