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
        this.express.use(cors());
        this.express.use(helmet.noCache());
    }

    private addRoutes() {
        for (const r of routes) {
            const route = Container.get(r);
            this.express.use(route.baseURL, route.router);
        }
    }
}