"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Service = void 0;
const postgres_db_1 = require("../../config/db/postgres_db");
const user_response_dto_1 = require("../dto/user_response_dto");
const bcrypt_1 = require("../../shared/bcrypt/bcrypt");
class User_Service {
    userRepository = postgres_db_1.AppDataSource.getRepository("users");
    async createUser(user_create_dto) {
        const user = this.userRepository.create(user_create_dto);
        user.role = "user";
        user.password = await bcrypt_1.Bcrypt.hashPassword(user.password);
        const user_response = await this.userRepository.save(user);
        return new user_response_dto_1.User_Response_Dto(user_response.id, user_response.name, user_response.email, user_response.role);
    }
    async getUserById(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async updateUser(id, user) {
        await this.userRepository.update(id, user);
        return this.getUserById(id);
    }
    async deleteUser(id) {
        await this.userRepository.delete(id);
    }
    async getAllUsers() {
        return await this.userRepository.find();
    }
}
exports.User_Service = User_Service;
