
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

export class AuthenticationHandler {

    constructor() {
        let result: dotenv.DotenvResult =
            dotenv.config({ path: "bin/.env" });

        if (result.error !== undefined) {
            throw result.error;            
        }
    }

    public generateToken(authenticateUser: AuthenicateUser): string {
        let token: string = jwt.sign(authenticateUser, process.env.SECRET_KEY, {
            expiresIn: "10min"
        });

        return token;
    }

    public verifyToken(token: string): AuthenicateUser {
        let verified: AuthenicateUser = <AuthenicateUser>jwt.verify(token, process.env.SECRET_KEY);
        return verified;

    }
}

export interface AuthenicateUser {
    userName: string;
}