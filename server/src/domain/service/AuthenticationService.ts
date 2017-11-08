import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

export class AuthenticationService {
    constructor() {
        let result: dotenv.DotenvResult =
            dotenv.config({ path: "bin/.env" });

        if (result.error !== undefined) {
            throw result.error;
        }
    }

    generateToken(authenticateUser: User): string {
        let token: string = jwt.sign(authenticateUser, process.env.SECRET_KEY, {
            expiresIn: "10min"
        });

        return token;
    }

    verifyToken(token: string): User {
        let verified: User = <User>jwt.verify(token, process.env.SECRET_KEY);
        return verified;
    }
}

export default new AuthenticationService();