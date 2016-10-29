/**
 * Created by swagner on 10/29/16.
 */
export declare class Logger {
    private module;
    private sink;
    constructor(module: string, sink?: any);
    debug(message: string): void;
    error(message: string): void;
    trace(message: string): void;
    warn(message: string): void;
    private write(level, message);
}
export declare enum LogLevel {
    trace = 0,
    debug = 1,
    warn = 2,
    error = 3,
}
