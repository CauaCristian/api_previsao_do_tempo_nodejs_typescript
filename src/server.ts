import "reflect-metadata";
import express, { Application } from "express";
import User_Router from "./modules/user/router/user_router";
import {swaggerDocs} from "./modules/config/docs/swagger_docs";
import "dotenv/config";

const PORT = parseInt(process.env.PORT || "3000");

export const createServer = (): Application => {

    const app = express();

    app.use(express.json());

    app.use("/users", User_Router);

    swaggerDocs(app, PORT);

    return app;

};