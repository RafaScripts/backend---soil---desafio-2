import prisma from "../database";


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
                users: true
            }
        });
    }

    create(data: any){
        return prisma.game.create({
            data: {
                name: data.name,
                thumbnail: data.thumbnail,
                rate: data.rate
            }
        })
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