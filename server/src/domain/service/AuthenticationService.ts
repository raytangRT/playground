import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

export class AuthenticationService {

    private tokenSecertKey: string;

    constructor() {
        let result: dotenv.DotenvResult =
            dotenv.config({ path: "bin/.env" });

        if (result.error !== undefined) {
            throw result.error;
        }

        this.tokenSecertKey = process.env.TOKEN_SECRET_KEY;
    }

    generateToken(authenticateUser: User): string {
        let token: string = jwt.sign(authenticateUser, this.tokenSecertKey, {
            expiresIn: "10min"
        });

        return token;
    }

    verifyToken(token: string): User {
        let verified: User = <User>jwt.verify(token, this.tokenSecertKey);
        return verified;
    }
}

export default new AuthenticationService();