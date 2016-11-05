"use strict";
const OutputSpeech_1 = require('./OutputSpeech');
class SpeechletReprompt {
    constructor(outputSpeech) {
        this.outputSpeech = outputSpeech;
    }
    static get defaultInstance() {
        return new SpeechletReprompt(OutputSpeech_1.SpeechletOutputSpeech.defaultInstance);
    }
}
exports.SpeechletReprompt = SpeechletReprompt;
//# sourceMappingURL=Reprompt.js.map