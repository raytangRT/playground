import { User } from '../../domain/entity/User';
import AuthenticationService from '../../domain/service/AuthenticationService';
import BaseRoute from './BaseRoute';
import { Request, Response, NextFunction } from 'express';

export default class AuthenticationRoute extends BaseRoute {

    constructor() {
        super('/api/v1/authenticate');
    }
    
    protected init() {
        this.router.post('/', this.authenticate);
    }

    private authenticate(req: Request, res: Response, next: NextFunction): void {

        if (req.cookies.auth) {
            res.status(404).send('authenticated');
        }

        let token: string = AuthenticationService.generateToken(<User>req.body);

        res.cookie('auth', true)
            .cookie('token', token)
            .json({
                status: "success"
            })
    }
}