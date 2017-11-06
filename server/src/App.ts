import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import "reflect-metadata"
import { createConnection } from "typeorm";
import { Category } from "./entities/Category";
import { Product } from "./entities/Product";

import HeroRouter from './routes/HeroRouter';
import AuthenticationRouter from './routes/AuthenticationRouter'

class App {
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
    }

    private addRoutes() {
        let router = express.Router();
        // placeholder route handler
        router.get('/api/v1/typeorm', (req, res, next) => {
            createConnection().then(async connection => {

                let productRepo = connection.getRepository(Product);
                let categoryRepo = connection.getRepository(Category);
                
                res.json(await connection.manager.findOneById(Product, 1, { relations: [ "Category" ] }));
                if (connection.isConnected) {
                    connection.close();
                }
            }).catch(error => console.log(error));
        });
        this.express.use('/', router);

        this.express.use('/api/v1/heroes', HeroRouter);
        this.express.use('/api/v1/authenticate', AuthenticationRouter);
    }
}

export default new App().express;