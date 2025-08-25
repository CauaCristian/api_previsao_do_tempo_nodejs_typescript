import "reflect-metadata";
import { createServer } from "./server";
import {AppDataSource} from "../src/modules/config/db/postgres_db";
import "dotenv/config";
import {connectRedis} from "./modules/config/db/redis_db";

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await AppDataSource.initialize();
        await connectRedis();
        console.log("Banco conectado com sucesso!");

        const app = createServer();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar aplicação:", error);
    }
}

start();
