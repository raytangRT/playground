import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'

import HeroRouter from './routes/HeroRouter';

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
        /* This is just to get up and running, and to make sure what we've got is
             * working so far. This function will change when we start to add more
             * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter);
    }
}

export default new App().express;