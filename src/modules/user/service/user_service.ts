import {AppDataSource} from "../../config/db/postgres_db";
import {User_Create_Dto} from "../dto/user_create_dto";
import {User_Response_Dto} from "../dto/user_response_dto";
import {Bcrypt} from "../../shared/bcrypt/bcrypt"
export class User_Service {
    private userRepository = AppDataSource.getRepository("users");

    async createUser(user_create_dto: User_Create_Dto): Promise<User_Response_Dto> {
        const user = this.userRepository.create(user_create_dto);
        user.role = "user";
        user.password = await Bcrypt.hashPassword(user.password);
        const user_response = await this.userRepository.save(user);
        return new User_Response_Dto(
            user_response.id,
            user_response.name,
            user_response.email,
            user_response.role,
            user_response.profile_photo,
        );
    }

    async getUserById(id: number): Promise<any> {
        return await this.userRepository.findOneBy({ id });
    }
    async getByEmail(email:string): Promise<any> {
        return await this.userRepository.findOneBy({ email });
    }
    async updateUser(id: number, user: any): Promise<any> {
        await this.userRepository.update(id, user);
        return this.getUserById(id);
    }
    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
    async getAllUsers(): Promise<any[]> {
        return await this.userRepository.find();
    }
}