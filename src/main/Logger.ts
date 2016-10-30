export class Logger {
    constructor(private module: string) { }

    public debug(message: string): void {
        this.write(LogLevel.DEBUG, message);
    }

    public error(message: string): void {
        this.write(LogLevel.ERROR, message);
    }

    public trace(message: string): void {
        this.write(LogLevel.TRACE, message);
    }

    public warn(message: string): void {
        this.write(LogLevel.WARN, message);
    }

    private write(level: LogLevel, message: string): void {
        console.log(`${new Date().toISOString()}\t${ LogLevel[level].toString()}\t${this.module}\t${message}`);
    }
}

export enum LogLevel {
    TRACE,
    DEBUG,
    WARN,
    ERROR
}
