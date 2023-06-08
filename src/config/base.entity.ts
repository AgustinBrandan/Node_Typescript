import { CreateDateColumn, PrimaryGeneratedColumn,  } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @CreateDateColumn({
        name:"createdAd",
        type: "timestamp",
    })
    createdAd!: Date;

    @CreateDateColumn({
        name:"updatedAt",
        type: "timestamp",
    })
    updatedAt!: Date;
}