import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API previsão do tempo com Node + TypeScript",
            version: "1.0.0",
            description: "Documentação da API gerada pelo Swagger",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: [
        "./src/server.ts",
        "./src/modules/user/router/*.ts",
        "./src/modules/user/dto/*.ts",
        "./src/modules/auth/router/*.ts",
        "./src/modules/auth/dto/*.ts",
        "./src/modules/weather/router/*.ts",
        "./src/modules/weather/dto/*.ts",
    ],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Express, port: number) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger disponível em http://localhost:${port}/api-docs`);
};
