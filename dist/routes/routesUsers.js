"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../modules/users/controller");
const routerUser = express_1.default.Router();
//Users Routes
routerUser.get('/users/list', controller_1.list);
routerUser.post('/users/create', controller_1.create);
routerUser.put('/users/update/:id', controller_1.update);
routerUser.delete('/users/remove/:id', controller_1.remove);
routerUser.post('/users/favorite/create', controller_1.favoriteGame);
exports.default = routerUser;
