import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ name: "user_name", type: "text" })
    userName: string;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "text" })
    status: string;

    @Column({type: "text", name: "login_time"})
    loginTime: string;
}