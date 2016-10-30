"use strict";
const SpeechletResponse_1 = require('./SpeechletResponse');
class AlexaResponse {
    constructor(response, sessionAttributes = {}) {
        this.response = response;
        this.version = '1.0';
    }
    static get defaultInstance() {
        let speechletResponse = SpeechletResponse_1.SpeechletResponse.defaultInstance;
        return new AlexaResponse(speechletResponse);
    }
}
exports.AlexaResponse = AlexaResponse;
//# sourceMappingURL=AlexaResponse.js.map