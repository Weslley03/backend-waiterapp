import User from '../models/User.js'

export function createService(body){
    try{
        return User.create(body);
    }catch(err){
        console.log(`houve um erro no servie, ${err}`)
    }
}   