/**
 * @openapi
 * components:
 *   schemas:
 *     User_Response_Dto:
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
 *         profile_photo:
 *           type: string
 *           example: "http://example.com/photo.jpg"
 */

export class User_Response_Dto {
    id!: number;
    name!: string;
    email!: string;
    role!: string;
    profile_photo?: string;

    constructor(id: number, name: string, email: string, role: string, profile_photo?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.profile_photo = profile_photo;
    }
}