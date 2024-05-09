"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routesUsers_1 = __importDefault(require("./routes/routesUsers"));
const routesGames_1 = __importDefault(require("./routes/routesGames"));
const firstGenerateUsers_1 = require("./utils/firstGenerateUsers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.use('/api/v1', routesUsers_1.default);
app.use('/api/v1', routesGames_1.default);
app.listen(3000, async () => {
    await (0, firstGenerateUsers_1.firstGenerateUsers)();
    console.log('Server is running on port 3000');
});
