"use strict";
class SpeechletOutputSpeech {
    constructor(text, type = 'PlainText') {
        this.text = text;
        this.type = type;
    }
    static get defaultInstance() {
        return new SpeechletOutputSpeech('Default Speechlet Output');
    }
}
exports.SpeechletOutputSpeech = SpeechletOutputSpeech;
//# sourceMappingURL=SpeechletOutputSpeech.js.map