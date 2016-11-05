"use strict";
const SpeechletResponse_1 = require('./SpeechletResponse');
class SpeechletResponseEnvelope {
    constructor(response, sessionAttributes) {
        this.response = response;
        this.version = '1.0';
    }
    static get defaultInstance() {
        let speechletResponse = SpeechletResponse_1.SpeechletResponse.defaultInstance;
        return new SpeechletResponseEnvelope(speechletResponse, {});
    }
}
exports.SpeechletResponseEnvelope = SpeechletResponseEnvelope;
//# sourceMappingURL=SpeechletResponseEnvelope.js.map