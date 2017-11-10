import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import { Service } from 'typedi';

export interface AuthenticationInfo {
    userName: string;
    salt: string;
}

@Service()
export class AuthenticationService {

    private tokenSecertKey: string;

    constructor() {
        this.tokenSecertKey = process.env.TOKEN_SECRET_KEY;
    }

    generateToken(info: AuthenticationInfo): string {
        let token: string = jwt.sign(info, this.tokenSecertKey, {
            expiresIn: "1hr"
        });

        return token;
    }

    verifyToken(token: string): AuthenticationInfo {
        return <AuthenticationInfo>jwt.verify(token, this.tokenSecertKey);
    }
}