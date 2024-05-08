import express from "express";

import { list, create, update, remove } from "../modules/users/controller";

const router = express.Router();

router.get('/users/list', list);
router.post('/users/create', create);
router.put('/users/update/:id', update);
router.delete('/users/remove/:id', remove);

export default router;