import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn({ type: 'int' })
    public albumId: Number;

    @Column({ type: "text", length: 160 })
    public title: string;

    @Column({ type: 'int' })
    public artistId: Number;
}