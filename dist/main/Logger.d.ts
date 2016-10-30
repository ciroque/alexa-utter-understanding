export declare class Logger {
    private module;
    constructor(module: string);
    debug(message: string): void;
    error(message: string): void;
    trace(message: string): void;
    warn(message: string): void;
    private write(level, message);
}
export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    WARN = 2,
    ERROR = 3,
}
