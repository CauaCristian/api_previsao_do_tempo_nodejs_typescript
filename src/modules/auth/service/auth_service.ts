import {User_Service} from "../../user/service/user_service";
import {Auth_Request_Dto} from "../dto/auth_request_dto";
import {Auth_Response_Dto} from "../dto/auth_response_dto";
import {Jwt} from "../../shared/jwt/jwt";
import {Bcrypt} from "../../shared/bcrypt/bcrypt";
import {Weather_Service} from "../../weather/service/weather_service";

export class Auth_Service {

    private user_service:User_Service = new User_Service()
    private jwt:Jwt = new Jwt();

    async login(auth_request_dto:Auth_Request_Dto): Promise<Auth_Response_Dto> {
        const user = await this.user_service.getByEmail(auth_request_dto.email)
        if(!user) {
            throw new Error("email incorreto");
        }
        if(!(Bcrypt.comparePassword(auth_request_dto.password, user.password))) {
            throw new Error("senha incorreta");
        }
        const token = await this.jwt.generateToken(user.id, user.role)
        return new Auth_Response_Dto(token);
    }
}