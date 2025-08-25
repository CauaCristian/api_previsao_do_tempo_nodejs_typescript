import {Request,Response,NextFunction} from "express";
import {Jwt} from "../../shared/jwt/jwt"
const jwt = new Jwt();

export async function auth_middleware(req: Request, res: Response, next: NextFunction) {
    try{
        const authorization = req.headers.authorization || "";
        if (!authorization.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Token de autenticação inválido" });
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token de autenticação não fornecido" });
        }
        const payload = await jwt.verifyToken(token);
        if (!payload) {
            return res.status(401).json({ message: "Token de autenticação inválido" });
        }
        (req as any).user = payload;
        next();
    }
    catch (error: any) {
        return res.status(401).json({ message: error.message });
    }
}
