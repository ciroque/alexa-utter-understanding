export class SpeechletCard {
    public static SIMPLE = 'Simple';

    public static get defaultInstance(): SpeechletCard {
        return new SpeechletCard('Card Title', 'Card Content', 'Simple');
    }

    constructor(public title: string, public content: string, public type: string) { }
}
