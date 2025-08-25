import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {IsEmail, Length, MinLength} from "class-validator"
@Entity("users")
export class User_Entity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ nullable: false , type:"varchar"})
    @Length(2, 50,{ message: "O nome deve ter entre 2 e 50 caracteres" })
    name!: string;
    @Column({ unique: true ,type:"varchar"})
    @IsEmail({}, { message: "O email deve ser válido" })
    email!: string;
    @Column({ nullable:false ,type:"varchar"})
    @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
    password!: string;
    @Column({nullable: true,type:"varchar"})
    profile_photo!: string;
    @Column({ nullable: false , type:"varchar"})
    role!: string;
}