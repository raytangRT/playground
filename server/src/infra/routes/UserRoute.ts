import { UserDomainService } from '../../domain/service/UserDomainService';
import { User } from '../../domain/entity/User';
import AuthenticationService from '../../domain/service/AuthenticationService';
import BaseRoute from './BaseRoute';
import { Router, Request, Response, NextFunction } from 'express';
import { getManager } from "typeorm";
import { Service, Inject } from "typedi"

@Service()
export class UserRoute extends BaseRoute {

    constructor(private userDomainService: UserDomainService) {
        super('/api/v1/user');
        console.log(this.userDomainService);
    }

    protected init() {
        this.router.get('/listAll', this.listAll.bind(this));
        this.router.post('/register', this.register.bind(this));
    }

    private async listAll(req: Request, res: Response, next: NextFunction) {
        const users: User[] = await this.userDomainService.getUsers();
        res.json(users);
    }

    private async register(req: Request, res: Response, next: NextFunction) {
        const user: User = await this.userDomainService.addUser(<User>req.body);
        res.json(user);
    }
}
