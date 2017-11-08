import { User } from "../entity/User";
import { Service } from "typedi"
import IDomainSercice from "./IDomainService";

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
        user.status = 'Active';
        return await this.entityManager.save(User, user);
    }

    public async deleteUser(userId: Number) {
        const user: User = await this.getUser(userId);
        user.status = 'Deleted';
        return await this.entityManager.save(User, user);
    }

}