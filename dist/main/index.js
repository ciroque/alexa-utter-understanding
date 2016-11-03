"use strict";
const UtterUnderstanding_1 = require('./UtterUnderstanding');
function handler(event, context) {
    UtterUnderstanding_1.UtterUnderstanding
        .handler(event, context)
        .then((response) => {
        context.succeed(response);
    })
        .catch((error) => {
        context.fail(error);
    });
}
exports.handler = handler;
//# sourceMappingURL=index.js.map