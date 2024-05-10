import {Request, Response} from "express";
import GamesConsults from "../../consults/favoriteConsults";
import rawdb from "../rawdb/rawdb";
import UsersConsults from "../../consults/usersConsults";

export async function list(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    try {
        const games = await GamesConsults.index();
        return res.status(200).json(games);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function create(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

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

    const {name, thumbnail, rate, idUser} = req.body;

    try {
        const game = await GamesConsults.create({name, thumbnail, rate});

        if(idUser){
            await UsersConsults.favoriteGame(idUser, game.id);
        }

        return res.status(201).json(game);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function searchGame(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    /* #swagger.parameters['game'] = {
            in: 'query',
            required: true,
            type: 'string'
        }
    */

    try {
        const {game} = req.query;
        const games = await rawdb.getGames(game as string);
        return res.status(200).json(games);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function searchById(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    /* #swagger.parameters['id'] = {
            in: 'path',
            required: true,
            type: 'string'
        }
    */

    try {
        const {id} = req.params;
        const game = await GamesConsults.searchById(id);
        return res.status(200).json(game);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function findWithUsers(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    try {
        const games = await GamesConsults.findWithUsers();
        return res.status(200).json(games);
    } catch (error: any) {
        return res.status(400).json({message: error.message});
    }
}

export async function updateGame(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    /* #swagger.parameters['id'] = {
            in: 'path',
            required: true,
            type: 'string'
        }
    */

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

    const {id} = req.params;
    const {name, thumbnail, rate} = req.body;

    try {

        const game = await GamesConsults.update(id, {name, thumbnail, rate});

        return res.status(203).json('Game Updated');

    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function deleteGame(req: Request, res: Response){
    // #swagger.tags = ['games']

    /* #swagger.security = [{
          "bearerAuth": []
  }] */

    /* #swagger.parameters['id'] = {
            in: 'path',
            required: true,
            type: 'string'
        }
    */

    const {id} = req.params;

    try {
        await GamesConsults.delete(id);
        return res.status(203).json('Game Deleted');
    }catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}
