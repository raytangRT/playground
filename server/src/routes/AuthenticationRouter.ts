import { BaseRouter } from './BaseRouter';
import { Request, Response, NextFunction } from 'express';

import { AuthenticationHandler, AuthenicateUser } from "../controls/AuthenticationHandler";

export class AuthenticationRouter extends BaseRouter {

    private static hanlder: AuthenticationHandler = new AuthenticationHandler();

    protected init() {
        this.router.post('/', this.authenticate);
    }

    private authenticate(req: Request, res: Response, next: NextFunction): void {

        if (req.cookies) {
            res.status(404).send('authenticated');
        }

        let v: AuthenicateUser = <AuthenicateUser>req.body

        let token: string = AuthenticationRouter.hanlder.generateToken(v);

        res.cookie('auth', true)
            .cookie('token', token)
            .json({
                status: "success"
            })

    }
}

export default new AuthenticationRouter().router;