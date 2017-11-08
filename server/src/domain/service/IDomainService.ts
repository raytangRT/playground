import { OrmManager } from "typeorm-typedi-extensions";
import { EntityManager } from "typeorm";

export default class IDomainSercice {

    @OrmManager()
    protected entityManager: EntityManager;

}