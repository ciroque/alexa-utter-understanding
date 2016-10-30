"use strict";
class SpeechletCard {
    constructor(title, content, type) {
        this.title = title;
        this.content = content;
        this.type = type;
    }
    static get defaultInstance() {
        return new SpeechletCard('Card Title', 'Card Content', 'Simple');
    }
}
exports.SpeechletCard = SpeechletCard;
//# sourceMappingURL=SpeechletCard.js.map