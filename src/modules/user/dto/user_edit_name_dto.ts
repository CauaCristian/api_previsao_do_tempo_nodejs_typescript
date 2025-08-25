import {IsNumber, IsString,IsNotEmpty} from "class-validator";

/**
 * @openapi
 * components:
 *   schemas:
 *     User_Edit_Name_Dto:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Cauã"
 *
 */
export class User_Edit_Name_Dto {
    @IsNumber()
    @IsNotEmpty({ message: 'id nao pode estar vazio' })
    id!: number;
    @IsString()
    @IsNotEmpty({ message: 'nome nao pode estar vazio' })
    name!: string;

    constructor(id: number,name: string) {
        this.id = id;
        this.name = name;
    }
}