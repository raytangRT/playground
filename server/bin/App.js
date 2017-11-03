"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const HeroRouter_1 = require("./routes/HeroRouter");
const AuthenticationRouter_1 = require("./routes/AuthenticationRouter");
class App {
    constructor() {
        this.express = express();
        this.configMiddlewares();
        this.addRoutes();
    }
    configMiddlewares() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
    }
    addRoutes() {
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.status(403).end('forbidden');
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter_1.default);
        this.express.use('/api/v1/authenticate', AuthenticationRouter_1.default);
    }
}
exports.default = new App().express;
