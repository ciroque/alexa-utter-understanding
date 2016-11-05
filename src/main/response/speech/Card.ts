export class Card {
    public static SIMPLE = 'Simple';

    public static get defaultInstance(): Card {
        return new Card('Card Title', 'Card Content', 'Simple');
    }

    constructor(public title: string, public content: string, public type: string) { }
}
