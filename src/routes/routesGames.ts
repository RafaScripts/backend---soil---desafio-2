import express from "express";

import {list, create, searchGame, searchById, deleteGame, updateGame, findWithUsers} from "../modules/favorites/controller";


const routerGames = express.Router();

//Users Routes
routerGames.get('/games/list', list);
routerGames.post('/games/create', create);
routerGames.get('/games/search', searchGame);
routerGames.get('/games/search/:id', searchById);
routerGames.get('/games/findWithUsers', findWithUsers);
routerGames.put('/games/update/:id', updateGame);
routerGames.delete('/games/delete/:id', deleteGame);

export default routerGames;