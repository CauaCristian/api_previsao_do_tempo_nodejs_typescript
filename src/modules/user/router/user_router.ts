import {Router,Request,Response} from 'express';
import {User_Service} from '../service/user_service';
import {User_Response_Dto} from '../dto/user_response_dto';
import {User_Create_Dto} from '../dto/user_create_dto';
import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";
import {User_Edit_Name_Dto} from "../dto/user_edit_name_dto";
import {auth_middleware} from "../../auth/middleware/auth_middleware";
const User_Router:Router = Router()
const user_service:User_Service = new User_Service()

/**
 * @openapi
 * /users/create:
 *   post:
 *     tags:
 *       - Users
 *     summary: cria um usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User_Create_Dto'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Response_Dto'
 *         description: usuario criado com sucesso
 */
User_Router.post('/create', async (req:Request<{}, {},User_Create_Dto>, res:Response<User_Response_Dto>):Promise<Response<User_Response_Dto>> => {
    try {
        const dto:User_Create_Dto = plainToInstance(User_Create_Dto, req.body);
        await validateOrReject(dto);
        const userResponse:User_Response_Dto = await user_service.createUser(dto);
        return res.status(201).json(userResponse);
    } catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
});
/**
 * @openapi
 * /users/edit/name:
 *   post:
 *     tags:
 *       - Users
 *     summary: Edita o nome do usuario
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User_Edit_Name_Dto'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Response_Dto'
 */
User_Router.post(
    "/edit/name",auth_middleware, async (req:Request<{},{}, User_Edit_Name_Dto>, res:Response<User_Response_Dto>):Promise<Response<User_Response_Dto>> => {
        try {
            const dto:User_Edit_Name_Dto = plainToInstance(User_Edit_Name_Dto, req.body);
            await validateOrReject(dto);
            const user = (req as any).user;
            if(user.id != dto.id) {
                console.log(user.id, dto.id);
                throw new Error("Você não tem permissão para editar esse usuário");
            }
            const userResponse:User_Response_Dto = await user_service.updateUser(dto.id, { name: dto.name });
            return res.status(200).json(userResponse);
        } catch (error: any) {
            return res.status(400).json({ message: error.message } as any);
        }
    }
)
/**
 * @openapi
 * /users/delete/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Deleta um usuario
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuario a ser deletado
 *     responses:
 *       204:
 *         description: Usuario deletado com sucesso
 *       400:
 *         description: Erro ao deletar usuario
 */
User_Router.delete("/delete/:id", auth_middleware,async (req:Request<{id:string}>, res:Response<void>) => {
    try {
        const id = Number(req.params.id);
        const user = (req as any).user;
        if(user.id !== id) {
            throw new Error("Você não tem permissão para deletar esse usuário");
        }
        await user_service.deleteUser(id);
        return res.status(204).send({message: "Usuario deletado"} as any);
    } catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
})

export default User_Router;