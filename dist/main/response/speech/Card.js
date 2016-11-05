"use strict";
class Card {
    constructor(title, content, type) {
        this.title = title;
        this.content = content;
        this.type = type;
    }
    static get defaultInstance() {
        return new Card('Card Title', 'Card Content', 'Simple');
    }
}
Card.SIMPLE = 'Simple';
exports.Card = Card;
//# sourceMappingURL=Card.js.map