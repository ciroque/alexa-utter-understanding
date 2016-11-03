"use strict";
class MockEvent {
    constructor(requestType = null, intentName = null) {
        this.request = {
            type: requestType,
            intent: {
                name: intentName
            }
        };
    }
}
exports.MockEvent = MockEvent;
//# sourceMappingURL=MockEvent.js.map