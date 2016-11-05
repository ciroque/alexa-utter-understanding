"use strict";
class OutputSpeech {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
    static get defaultInstance() {
        return new OutputSpeech('Default Speechlet Output', OutputSpeech.PLAINTEXT);
    }
}
OutputSpeech.PLAINTEXT = 'PlainText';
exports.OutputSpeech = OutputSpeech;
//# sourceMappingURL=OutputSpeech.js.map