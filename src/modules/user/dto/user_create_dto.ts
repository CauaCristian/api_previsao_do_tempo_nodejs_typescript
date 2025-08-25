import { IsEmail, IsNotEmpty, IsString , Length, MinLength} from 'class-validator';
/**
 * @openapi
 * components:
 *   schemas:
 *     User_Create_Dto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: "Cauã"
 *         email:
 *           type: string
 *           example: "caua@email.com"
 *         password:
 *           type: string
 *           example: "123456"
 */

export class User_Create_Dto {
    @IsString()
    @IsNotEmpty({ message: 'nome nao pode estar vazio' })
    @Length(2, 50, { message: 'nome deve ter entre 2 e 50 caracteres' })
    name!: string;
    @IsEmail({}, { message: 'email deve ser um email válido' })
    email!: string;
    @MinLength(6, { message: 'senha deve ter pelo menos 6 caracteres' })
    password!: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}