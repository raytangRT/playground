import { BaseRouter } from './BaseRouter';
import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken'

interface AuthenicateUser {
    userName: string;
}

export class AuthenticationRouter extends BaseRouter {

    protected init() {
        this.router.get('/', this.authenticate);
    }

    private authenticate(req: Request, res: Response, next: NextFunction): void {
        let v: AuthenicateUser = { userName: "admin2" }

        let token: string = jwt.sign(v, "secretKey", {
            expiresIn: "10min"
        });

        res.json({
            status: "success",
            token: token
        })

        jwt.verify(token, "secretKey", (err, decoded) => {
            
            console.log(decoded);
        });
    }
}

export default new AuthenticationRouter().router;