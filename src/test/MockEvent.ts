export class MockEvent {
    public request: any;

    constructor(requestType: string, intentName: string) {
        this.request = {
            type: requestType,
            intent: {
                name: intentName
            }
        };
    }
}
