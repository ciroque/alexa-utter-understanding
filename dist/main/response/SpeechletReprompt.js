"use strict";
const SpeechletOutputSpeech_1 = require('./SpeechletOutputSpeech');
class SpeechletReprompt {
    constructor(outputSpeech) {
        this.outputSpeech = outputSpeech;
    }
    static get defaultInstance() {
        return new SpeechletReprompt(SpeechletOutputSpeech_1.SpeechletOutputSpeech.defaultInstance);
    }
}
exports.SpeechletReprompt = SpeechletReprompt;
//# sourceMappingURL=SpeechletReprompt.js.map