import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    Id: Number;
    @Column("text")
    CategoryName: string;
    @Column("text")
    Description: string;
}