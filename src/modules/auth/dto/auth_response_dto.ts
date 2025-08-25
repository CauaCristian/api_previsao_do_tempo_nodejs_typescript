/**
 * @openapi
 * components:
 *   schemas:
 *     Auth_Response_Dto:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkNhdWHDqyIsImlhdCI6MTYwNjY2NjAwMCwiZXhwIjoxNjA2NjY5NjAwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 */
export class Auth_Response_Dto {
    token!: string;
    constructor(token: string) {
        this.token = token;
    }
}