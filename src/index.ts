class UtterUnderstanding {

    constructor() {}

    static handler(event, context) {
        
    }

    public handleRequest(event: any, context: any): void {
        switch(event.request.type) {
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

export.handler = UtterUnderstanding.handler;

