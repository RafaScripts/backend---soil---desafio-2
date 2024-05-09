import UsersConsults from "../consults/usersConsults";
import {Role} from "../models/user_model";

export async function firstGenerateUsers(){
    const adm = {
        name: 'jhon',
        email: 'admin@admin.com',
        password: 'admin',
        role: Role['ADMIN']
    }

    const user = {
        name: 'jhon',
        email: 'user@user.com',
        password: 'user123',
    }

    let existAdm = await UsersConsults.exist(adm.email);

    if(existAdm > 0){
        console.log('Admin has been registred');
    }else{
        await UsersConsults.create(adm);
    }

    let existUser = await UsersConsults.exist(user.email);

    if(existUser > 0) {
        console.log('User has been registred');
    }else{
        await UsersConsults.create({...user, role: Role['USER']});
    }

}