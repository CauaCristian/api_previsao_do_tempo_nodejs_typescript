"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Response_Dto = void 0;
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
class User_Response_Dto {
    id;
    name;
    email;
    role;
    constructor(id, name, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}
exports.User_Response_Dto = User_Response_Dto;
