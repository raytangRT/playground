import { User } from "../entity/User";
import { Service } from "typedi"
import IDomainSercice from "./IDomainService";
import { AuthenticationInfo, AuthenticationService } from "../service/AuthenticationService";

import * as crypto from "crypto"

@Service()
export class UserDomainService extends IDomainSercice {

    public async getUsers() {
        return await this.entityManager.find(User);
    }

    public async getUser(id: Number) {
        return await this.entityManager.findOneById(User, id);
    }

    public async getUserByUserName(userName: string) {
        return await this.entityManager.findOne(User, { userName: userName });
    }

    public async addUser(user: User) {

        const users = await this.entityManager.find(User, { where: { userName: user.userName } });

        if (users !== undefined && users.length > 0) {
            throw Error(`Duplicated user name ${user.userName}`);
        }

        user.status = 'Active';
        return await this.entityManager.save(User, user);
    }

    public async deleteUser(userId: Number) {
        const user: User = await this.getUser(userId);
        user.status = 'Deleted';
        return await this.entityManager.save(User, user);
    }

    public async login(userName: string, password: string) {
        const user = await this.getUserByUserName(userName);
        
        if (user === undefined) {
            throw `user ${userName} not found`;
        }

        const salt: string = crypto.randomBytes(16).toString('base64');
        
        const authInfo: AuthenticationInfo = { userName: user.userName, salt: salt};

        user.loginTime = new Date().toString();

        this.entityManager.save(user);

        return authInfo;
    }

    public async logout(userName: string) {
        const user = await this.getUserByUserName(userName);

        user.loginTime = null;

        this.entityManager.save(user);
    }
}