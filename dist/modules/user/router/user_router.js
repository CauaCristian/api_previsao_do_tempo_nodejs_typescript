"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = require("../service/user_service");
const user_create_dto_1 = require("../dto/user_create_dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const User_Router = (0, express_1.Router)();
const user_service = new user_service_1.User_Service();
/**
 * @openapi
 * /users/create:
 *   post:
 *     summary: cria um usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCreateDto'
 *     responses:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserResponseDto'
 *       201:
 *         description: usuario criado com sucesso
 */
User_Router.post('/create', async (req, res) => {
    try {
        const dto = (0, class_transformer_1.plainToInstance)(user_create_dto_1.User_Create_Dto, req.body);
        await (0, class_validator_1.validateOrReject)(dto);
        const userResponse = await user_service.createUser(dto);
        return res.status(201).json(userResponse);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
});
exports.default = User_Router;
