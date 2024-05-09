import {Request, Response} from "express";
import GamesConsults from "../../consults/favoriteConsults";

export async function list(req: Request, res: Response){
    // #swagger.tags = ['games']

    try {
        const games = await GamesConsults.index();
        return res.status(200).json(games);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function create(req: Request, res: Response){
    // #swagger.tags = ['games']

    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/createGame"
                    }
                }
            }
        }
    */

    /* #swagger.responses[200] = {
            description: "jogo cadastrado"
        }
    */

    const {name, thumbnail, rate} = req.body;

    try {
        const game = await GamesConsults.create({name, thumbnail, rate});
        return res.status(201).json(game);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}