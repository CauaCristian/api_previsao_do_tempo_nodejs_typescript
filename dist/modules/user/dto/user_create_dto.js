"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Create_Dto = void 0;
const class_validator_1 = require("class-validator");
/**
 * @openapi
 * components:
 *   schemas:
 *     UserCreateDto:
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
class User_Create_Dto {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.User_Create_Dto = User_Create_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'nome nao pode estar vazio' }),
    (0, class_validator_1.Length)(2, 50, { message: 'nome deve ter entre 2 e 50 caracteres' }),
    __metadata("design:type", String)
], User_Create_Dto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'email deve ser um email válido' }),
    __metadata("design:type", String)
], User_Create_Dto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'senha deve ter pelo menos 6 caracteres' }),
    __metadata("design:type", String)
], User_Create_Dto.prototype, "password", void 0);
