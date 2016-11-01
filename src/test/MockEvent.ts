export class MockEvent {
    public request: any;

    constructor(requestType: string = null, intentName: string = null) {
        this.request = {
            type: requestType,
            intent: {
                name: intentName
            }
        };
    }
}
