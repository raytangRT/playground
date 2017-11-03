import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'

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
    }

    private addRoutes() {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.status(403).end('forbidden')
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter);
        this.express.use('/api/v1/authenticate', AuthenticationRouter);
    }
}

export default new App().express;