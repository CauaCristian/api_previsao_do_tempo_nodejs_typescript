"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./server");
const postgres_db_1 = require("../src/modules/config/db/postgres_db");
require("dotenv/config");
const PORT = process.env.PORT || 3000;
async function start() {
    try {
        await postgres_db_1.AppDataSource.initialize();
        console.log("📦 Banco conectado com sucesso!");
        const app = (0, server_1.createServer)();
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Erro ao iniciar aplicação:", error);
    }
}
start();
