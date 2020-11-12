import * as http from "http";
import {Request, Response} from "express";
import App from "./app";
import { Logger } from "./logger/logger";
import {createConnection} from "typeorm";
import { AllRoutes } from "./routes/routes";

createConnection().then(async connection => {
    const port = 3080;

    // register express routes from defined application routes
    AllRoutes.forEach(route => {
        (App as any)[route.method]('/api' + route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    App.set("port", port);
    const server = http.createServer(App);
    server.listen(port);

    const logger = new Logger();

    server.on("listening", function(): void {
        const addr = server.address();
        const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
        logger.info(`Listening on ${bind}/api`);
    });
}).catch(error => console.log(error));

module.exports = App;