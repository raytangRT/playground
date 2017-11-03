"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
}
exports.BaseRouter = BaseRouter;
