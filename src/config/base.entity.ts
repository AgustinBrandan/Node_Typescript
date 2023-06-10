import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @CreateDateColumn({
        name:"createdAd",
        type: "timestamp",
    })
    createdAd!: Date;

    @UpdateDateColumn({
        name:"updatedAt",
        type: "timestamp",
    })
    updatedAt!: Date;
}