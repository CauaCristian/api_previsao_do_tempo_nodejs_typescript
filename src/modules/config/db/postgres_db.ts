import "reflect-metadata";
import {DataSource} from "typeorm";
import {User_Entity} from "../../user/entity/user_entity";
import "dotenv/config";
import {Weather_entity} from "../../weather/entity/weather_entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User_Entity,Weather_entity],
    migrations: [],
});