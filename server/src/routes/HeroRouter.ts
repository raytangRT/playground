import { BaseRouter } from './BaseRouter';
import { Request, Response, NextFunction } from 'express';
import { Hero } from "../entities/Hero";

const Heroes = require('../data');

export class HeroRouter extends BaseRouter {

  protected init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getById);
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes);
  }

  public getById(req: Request, res: Response, next: NextFunction) {
    let id: Number = req.params["id"];
    let hero: Hero = Heroes.find((hero: Hero) => hero.id == id);
    res.send(hero);
  }

}

export default new HeroRouter().router;