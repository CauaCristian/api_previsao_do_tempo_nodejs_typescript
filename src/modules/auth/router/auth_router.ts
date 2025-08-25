import {Router,Request,Response} from "express";
import {Auth_Service} from "../service/auth_service";
import {Auth_Request_Dto} from "../dto/auth_request_dto";
import {Auth_Response_Dto} from "../dto/auth_response_dto";
import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";
import {Weather_Service} from "../../weather/service/weather_service";
const Auth_router:Router = Router();
const auth_service:Auth_Service = new Auth_Service();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth_Request_Dto'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth_Response_Dto'
 *         description: Login realizado com sucesso
 */

Auth_router.post("/login", async (req:Request<{}, {}, Auth_Request_Dto>, res:Response<Auth_Response_Dto>) => {
    try{
        const auth_request_dto:Auth_Request_Dto = plainToInstance(Auth_Request_Dto, req.body);
        await validateOrReject(auth_request_dto);
        return res.status(200).json(await auth_service.login(auth_request_dto));
    }
    catch (error: any) {
        return res.status(400).json({ message: error.message } as any);
    }
});

export default Auth_router;