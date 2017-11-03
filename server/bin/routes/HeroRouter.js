"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = require("./BaseRouter");
const Heroes = require('../data');
class HeroRouter extends BaseRouter_1.BaseRouter {
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
    }
    getAll(req, res, next) {
        res.send(Heroes);
    }
    getById(req, res, next) {
        let id = req.params["id"];
        let hero = Heroes.find((hero) => hero.id == id);
        res.send(hero);
    }
}
exports.HeroRouter = HeroRouter;
exports.default = new HeroRouter().router;
