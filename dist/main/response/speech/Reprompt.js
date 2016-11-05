"use strict";
const OutputSpeech_1 = require('./OutputSpeech');
class Reprompt {
    constructor(outputSpeech) {
        this.outputSpeech = outputSpeech;
    }
    static get defaultInstance() {
        return new Reprompt(OutputSpeech_1.OutputSpeech.defaultInstance);
    }
}
exports.Reprompt = Reprompt;
//# sourceMappingURL=Reprompt.js.map