import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

/**
 * @openapi
 * components:
 *   schemas:
 *     Auth_Request_Dto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: "caua@email.com"
 *         password:
 *           type: string
 *           example: "123456"
 */

export class Auth_Request_Dto {
    @IsString()
    @IsNotEmpty({ message: 'email nao pode estar vazio' })
    @IsEmail({}, { message: 'email deve ser um email válido' })
    email!: string;
    @IsString()
    @IsNotEmpty({ message: 'password nao pode estar vazio' })
    @Length(2, 50, { message: 'nome deve ter entre 2 e 50 caracteres' })
    password!: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}