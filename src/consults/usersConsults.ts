import prisma from "../database";
import {UserCreate} from "../models/user_model";

class UsersConsults{
    index(){
        return prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password_hash: false,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    listAllFavoriteGames(id: string): any{
        return prisma.user.findFirst({
            relationLoadStrategy: 'join',
            where: {
                id: id
            },
            include: {
                favoriteGames: true
            }
        });
    }

    searchById(id: string){
        return prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    exist(email: string){
        return prisma.user.count({
            where: {
                email: email
            }
        })
    }

    create(data: UserCreate){
        return prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password_hash: data.password,
                role: data.role
            }
        });
    }

    update(id: any, data: {name: string, email: string, password: string}){
        return prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: data.name,
                email: data.email,
                password_hash: data.password
            }
        });
    }

    delete(id: any){
        return prisma.user.delete({
            where: {
                id: id
            }
        });
    }

    favoriteGame(idGame: string, idUser: string){
        return prisma.userFavoriteGame.create({
            data: {
                gameId: idGame,
                userId: idUser
            }
        });
    }
}

export default new UsersConsults;