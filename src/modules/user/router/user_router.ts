import {Router,Request,Response} from 'express';
import {User_Service} from '../service/user_service';
import {User_Response_Dto} from '../dto/user_response_dto';
import {User_Create_Dto} from '../dto/user_create_dto';
import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";

const User_Router:Router = Router()
const user_service:User_Service = new User_Service()

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
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponseDto'
 *         description: usuario criado com sucesso
 */

User_Router.post('/create', async (req:Request<{}, {},User_Create_Dto>, res:Response<User_Response_Dto>) => {
    try {
        const dto:User_Create_Dto = plainToInstance(User_Create_Dto, req.body);
        await validateOrReject(dto);
        const userResponse:User_Response_Dto = await user_service.createUser(dto);
        return res.status(201).json(userResponse);
    } catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
});

export default User_Router;