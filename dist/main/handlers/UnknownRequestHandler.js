"use strict";
/**
 * Created by swagner on 10/29/16.
 */
class UnknownRequestHandler {
    handleRequest(event, context) {
        return new Promise((resolve, reject) => {
            reject('Not Implemented');
        });
    }
}
exports.UnknownRequestHandler = UnknownRequestHandler;
//# sourceMappingURL=UnknownRequestHandler.js.map