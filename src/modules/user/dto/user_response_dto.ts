/**
 * @openapi
 * components:
 *   schemas:
 *     UserResponseDto:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Cauã"
 *         email:
 *           type: string
 *           example: "caua@email.com"
 *         role:
 *           type: string
 *           example: "user"
 */
export class User_Response_Dto {
    id!: number;
    name!: string;
    email!: string;
    role!: string;

    constructor(id: number, name: string, email: string, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}