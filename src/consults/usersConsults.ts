import prisma from "../database";
import {UserCreate} from "../models/user_model";

class UsersConsults{
    index(){
        return prisma.users.findMany();
    }

    searchById(id: any){
        return prisma.users.findUnique({
            where: {
                id: id
            }
        });
    }

    create(data: UserCreate){
        return prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password_hash: data.password_hash,
                role: data.role
            }
        });
    }

    update(id: any, data: UserCreate){
        return prisma.users.update({
            where: {
                id: id
            },
            data: {
                name: data.name,
                email: data.email,
                password_hash: data.password_hash,
                role: data.role
            }
        });
    }

    delete(id: any){
        return prisma.users.delete({
            where: {
                id: id
            }
        });
    }
}

export default new UsersConsults;