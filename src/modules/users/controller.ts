import {Request, Response} from "express";
import UsersConsults from "../../consults/usersConsults";

export async function list(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    /* #swagger.responses[200] = {
            description: "Resultados encontrados.",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/userList"
                    }
                }
            }
        }
    */

    /* #swagger.responses[500] = {
            description: "Error",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/errorUserList"
                    }
                }
            }
        }
    */

    try {

        const users = await UsersConsults.index();

        return res.status(200).json(users);

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function create(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    /* #swagger.responses[200] = {
           description: "Resultados encontrados.",
           content: {
               "application/json": {
                   schema:{
                       $ref: "#/components/schemas/userCreate"
                   }
               }
           }
       }
   */

    /* #swagger.responses[500] = {
            description: "Error",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/errorUserList"
                    }
                }
            }
        }
    */

    const {name, email, password, role} = req.body;

    try {

        const user = await UsersConsults.create({name, email, password, role});

        return res.status(201).json(user);

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function update(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    /* #swagger.responses[200] = {
           description: "Resultados encontrados.",
           content: {
               "application/json": {
                   schema:{
                       $ref: "#/components/schemas/userUpdate"
                   }
               }
           }
       }
   */

    /* #swagger.responses[500] = {
            description: "Error",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/errorUserList"
                    }
                }
            }
        }
    */

    const {id} = req.params;
    const {name, email, password, role} = req.body;

    try {

        const user = await UsersConsults.update(id, {name, email, password, role});

        return res.status(200).json(user);

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function remove(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    const {id} = req.params;

    try {

        await UsersConsults.delete(id);

        return res.status(204).send();

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}