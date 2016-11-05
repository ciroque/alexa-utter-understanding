export class    OutputSpeech {
    public static PLAINTEXT = 'PlainText';

    public static get defaultInstance(): OutputSpeech {
        return new OutputSpeech('Default Speechlet Output', OutputSpeech.PLAINTEXT);
    }

    constructor(public text: string, public type: string) { }
}
