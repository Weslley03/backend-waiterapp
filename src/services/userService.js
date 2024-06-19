import User from '../models/User.js'

export async function findUserByEmail(email){
    return User.findOne({email: email})
}

export async function createService(email, password, userCategory){
    try{

        const duplicate = await findUserByEmail(email);
        //console.log(user)
        if(duplicate){
            return {ok: false, message: 'esse e-mail já está cadastrado'}
        }

        const user = await User.create({email, password, userCategory});
        if(!user){
            return {ok: false, message: 'não foi possivel criar o usuario'}
        }

        return { ok: true, user, message: 'user create succesfully'}
    
    }catch(err){
        console.log(`houve um erro no service, ${err}`)
        throw new Error('erro no serviço de criação de usuario');
    }
}   
