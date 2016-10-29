export declare class UtterUnderstanding {
    private logger;
    private handlers;
    static handler(event: any, context: any): void;
    constructor();
    handleRequest(event: any, context: any): void;
    private handleDefault();
    private handleEndSession();
    private handleIntent();
    private handleLaunch();
}
export declare function handler(event: any, context: any): void;
