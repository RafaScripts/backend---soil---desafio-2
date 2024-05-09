import express from "express";

import { list, create } from "../modules/favorites/controller";


const routerGames = express.Router();

//Users Routes
routerGames.get('/games/list', list);
routerGames.post('/games/create', create);

export default routerGames;