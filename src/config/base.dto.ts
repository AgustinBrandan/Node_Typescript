
import { IsDate, IsOptional, IsUUID } from "class-validator";

//validar la informacion que va entrar


export class BaseDTO{
    @IsUUID()
    @IsOptional()
    id!:string;

    @IsDate()
    @IsOptional()
    createdAd!: Date;

    @IsDate()
    @IsOptional()
    updateAt!: Date;

}