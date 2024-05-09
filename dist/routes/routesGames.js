"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../modules/favorites/controller");
const routerGames = express_1.default.Router();
//Users Routes
routerGames.get('/games/list', controller_1.list);
routerGames.post('/games/create', controller_1.create);
routerGames.get('/games/search', controller_1.searchGame);
routerGames.get('/games/search/:id', controller_1.searchById);
routerGames.get('/games/findWithUsers', controller_1.findWithUsers);
routerGames.put('/games/update/:id', controller_1.updateGame);
routerGames.delete('/games/delete/:id', controller_1.deleteGame);
exports.default = routerGames;
