export class SpeechletOutputSpeech {
    public static PLAINTEXT = 'PlainText';

    public static get defaultInstance(): SpeechletOutputSpeech {
        return new SpeechletOutputSpeech('Default Speechlet Output', SpeechletOutputSpeech.PLAINTEXT);
    }

    constructor(public text: string, public type: string) { }
}
