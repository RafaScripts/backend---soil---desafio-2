import express from "express";

import {list, create, update, remove, favoriteGame} from "../modules/users/controller";


const routerUser = express.Router();

//Users Routes
routerUser.get('/users/list', list);
routerUser.post('/users/create', create);
routerUser.put('/users/update/:id', update);
routerUser.delete('/users/remove/:id', remove);
routerUser.post('/users/favorite/create', favoriteGame);

export default routerUser;