// src/config/redis.ts
import { createClient } from "redis";

const redisClient = createClient({
    url: "redis://localhost:6379",
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export async function connectRedis() {
    if (!redisClient.isOpen) {
        try{
            await redisClient.connect();
            console.log("Redis conectado com sucesso!");
        } catch (error:any) {
            console.error("Erro ao conectar no Redis:", error.message);
        }
    }
}

export default redisClient;
