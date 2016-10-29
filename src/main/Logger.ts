/**
 * Created by swagner on 10/29/16.
 */

export class Logger {
    constructor(private module: string, private sink: any = console) { }

    public debug(message: string): void {
        this.write(LogLevel.debug, message);
    }

    public error(message: string): void {
        this.write(LogLevel.error, message);
    }

    public trace(message: string): void {
        this.write(LogLevel.trace, message);
    }

    public warn(message: string): void {
        this.write(LogLevel.warn, message);
    }

    private write(level: LogLevel, message: string): void {
        this.sink.log(`${new Date().toISOString()}\t${level}\t${this.module}\t${message}`);
    }
}

export enum LogLevel {
    trace,
    debug,
    warn,
    error
}
