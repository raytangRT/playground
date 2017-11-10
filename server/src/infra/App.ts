import { UserDomainService } from '../domain/service/UserDomainService';
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { Album } from "../domain/entity/Album";
import { Product } from "../domain/entity/Product";

import routes from './Routes'
import BaseRoute from './routes/BaseRoute';
import { UserRoute } from './routes/UserRoute';

import { Container } from "typedi";

export default class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.configMiddlewares();
        this.addRoutes();
    }

    private configMiddlewares() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
        this.express.use(cookieParser());

        //options for cors midddleware
        const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: 'http://localhost:8081',
            preflightContinue: false
        };

        this.express.use(cors(options));
        this.express.use(helmet.noCache());
    }

    private addRoutes() {
        for (const r of routes) {
            const route = Container.get(r);
            this.express.use(route.baseURL, route.router);
        }
    }
}