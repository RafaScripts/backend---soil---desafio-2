import {Request, Response} from "express";
import UsersConsults from "../../consults/usersConsults";
import bcrypt from 'bcrypt';

export async function list(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    /* #swagger.responses[200] = {
            description: "Lista de todos os usuarios.",
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

        let users = await UsersConsults.index();

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

    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/userCreate"
                    }
                }
            }
        }
    */

    /* #swagger.responses[201] = {
           description: "resultado apos criar um usuario."
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

        const exist = await UsersConsults.exist(email);

        if(exist > 0) throw new Error('User has been registred');

        const password_hash = await bcrypt.hash(password, 8);

        const user = await UsersConsults.create({name, email, password: password_hash, role});

        return res.status(201).json('User Created');

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function update(req: Request, res: Response){
    // #swagger.tags = ['Users']

    /* #swagger.security = [{
           "bearerAuth": []
   }] */

    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
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
    const {name, email, password} = req.body;

    try {

        const password_hash = await bcrypt.hash(password, 8);

        const user = await UsersConsults.update(id, {name, email, password: password_hash});

        return res.status(203).json('User Updated');

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