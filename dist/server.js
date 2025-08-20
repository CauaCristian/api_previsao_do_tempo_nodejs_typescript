"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./modules/user/router/user_router"));
const swagger_docs_1 = require("./modules/config/docs/swagger_docs");
require("dotenv/config");
const PORT = parseInt(process.env.PORT || "3000");
const createServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/users", user_router_1.default);
    (0, swagger_docs_1.swaggerDocs)(app, PORT);
    return app;
};
exports.createServer = createServer;
