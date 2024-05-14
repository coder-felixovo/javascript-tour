import pino from "pino";

class Logger {
  #logCli;

  constructor(level) {
    this.#logCli = pino({
      level: level || "debug",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true
        }
      }
    });
  }

  info(msg) {
    this.#logCli.info(msg); 
  }

  warn(msg) {
    this.#logCli.warn(msg);
  }

  error(msg) {
    this.#logCli.error(msg);
  }
}

export const loggerServ = new Logger();