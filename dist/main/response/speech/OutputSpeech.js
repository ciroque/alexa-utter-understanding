"use strict";
class SpeechletOutputSpeech {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
    static get defaultInstance() {
        return new SpeechletOutputSpeech('Default Speechlet Output', SpeechletOutputSpeech.PLAINTEXT);
    }
}
SpeechletOutputSpeech.PLAINTEXT = 'PlainText';
exports.SpeechletOutputSpeech = SpeechletOutputSpeech;
//# sourceMappingURL=OutputSpeech.js.map