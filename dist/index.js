class UtterUnderstanding {
    constructor() {
    }
    static handler(event, context) {
    }
    handleRequest(event, context) {
        switch (event.request.type) {
            case 'IntentRequest':
                break;
            case 'LaunchRequest':
                break;
            case 'EndSessionRequest':
                break;
            default:
                break;
        }
    }
}
handler = UtterUnderstanding.handler;
//# sourceMappingURL=index.js.map