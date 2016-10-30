export class SpeechletCard {
    public static get defaultInstance(): SpeechletCard {
        return new SpeechletCard('Card Title', 'Card Content');
    }

    constructor(
        public title: string,
        public content: string,
        public type = 'Simple') { }
}
