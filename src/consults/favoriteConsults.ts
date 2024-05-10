import prisma from "../database";
import {Game, GameCreate} from "../models/favorite_model";


class GamesConsults{

    index(){
        return prisma.game.findMany();
    }

    searchById(id: string){
        return prisma.game.findUnique({
            where: {
                id: id
            }
        });
    }

    findWithUsers(){
        return prisma.game.findMany({
            relationLoadStrategy: 'join',
            include: {
                users: {
                    include: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        });
    }

    create(data: GameCreate){
        return prisma.game.create({
            data: {
                name: data.name,
                thumbnail: data.thumbnail,
                rate: data.rate
            }
        })
    }

    update(id: string, data: GameCreate){
        return prisma.game.update({
            where: {
                id: id
            },
            data: {
                name: data.name,
                thumbnail: data.thumbnail,
                rate: data.rate
            }
        });
    }

    delete(id: string){
        return prisma.game.delete({
            where: {
                id: id
            }
        });
    }

    /*create(data: any){
        return prisma.favoriteGames.create({
            data: {

            }
        });
    }

    update(id: any, data: any){
        return prisma.favoriteGames.update({
            where: {
                id: id
            },
            data: {

        });
    }

    delete(id: any){
        return prisma.favoriteGames.delete({
            where: {
                id: id
            }
        });
    }*/
}

export default new GamesConsults;