import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    Id: Number;

    @Column({ type: "text", length: 800 })
    ProductName: string;

    @Column()
    SupplierId: Number;
    
    @OneToOne(type => Category)
    @JoinColumn()
    Category: Category;

    @Column()
    QuantityPerUnit: string;
    @Column()
    UnitPrice: Number;
    @Column()
    UnitsInStock: Number;
    @Column()
    UnitsOnOrder: Number;
    @Column()
    ReorderLevel: Number;
    @Column()
    Discontinued: Number;
}