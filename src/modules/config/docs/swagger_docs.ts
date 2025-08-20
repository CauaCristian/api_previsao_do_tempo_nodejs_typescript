import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API com Node + TypeScript",
            version: "1.0.0",
            description: "Documentação da API gerada pelo Swagger",
        },
    },
    apis: ["./src/modules/user/router/*.ts", "./src/modules/user/dto/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Express, port: number) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`📖 Swagger disponível em http://localhost:${port}/api-docs`);
};
