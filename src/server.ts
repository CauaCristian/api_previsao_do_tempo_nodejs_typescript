import "reflect-metadata";
import express, { Application } from "express";
import User_Router from "./modules/user/router/user_router";
import {swaggerDocs} from "./modules/config/docs/swagger_docs";
import "dotenv/config";
import Auth_Router from "./modules/auth/router/auth_router";
import Weather_Router from "./modules/weather/router/weather_router";
import {auth_middleware} from "./modules/auth/middleware/auth_middleware";
const PORT = parseInt(process.env.PORT || "3000");

/**
 * @openapi
 * tags:
 *   - name: Auth
 *     description: Operações de autenticação
 *   - name: Users
 *     description: Operações relacionadas a usuários
 *   - name: Weather
 *     description: Operações de previsão do tempo
 */

export const createServer = (): Application => {

    const app = express();

    app.use(express.json());

    app.use("/users", User_Router);
    app.use("/auth", Auth_Router);
    app.use("/weather", auth_middleware ,Weather_Router);

    swaggerDocs(app, PORT);

    return app;

};