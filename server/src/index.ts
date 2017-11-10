import "reflect-metadata";

import * as http from 'http'
import * as debug from 'debug'
import { createConnection, useContainer } from 'typeorm'
import { Container } from "typedi";
import * as dotenv from 'dotenv';

import App from './infra/App'

let result: dotenv.DotenvResult =
    dotenv.config({ path: "bin/.env" });

if (result.error !== undefined) {
    throw result.error;
}

const port = process.env.Port || 3000;

useContainer(Container)
createConnection().then(async connection => {
    debug('ts-express:server')

    const app: App = new App();
    app.express.set('port', port);

    const server = http.createServer(app.express);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }


    function onListening(): void {
        let addr = server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        debug(`Listening on ${bind}`);
    }

}).catch(error => console.log("TypeORM connection error: ", error));
