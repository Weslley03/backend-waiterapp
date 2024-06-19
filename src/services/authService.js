import User from '../models/User.js'
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config();

export function generateToken(id){
    return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: 86400})
}

export async function loginService(email, password, userCategory){
    try{
        
        const user = await User.findOne({email: email}).select(`+password`)
        if(!user){
            return { valid: false, message: 'usuário não encontrado' };
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if(!passwordIsValid){
            return { valid: false, message: 'senha do usuário incorreta' };
        }

        if(userCategory !== user.userCategory){
            return { valid: false, message: 'categoria de usuário incorreta' };
        }

        return { valid: true, user, message: 'login bem-sucedido'}
    }catch(err){
        console.log(`deu erro no loginService, back `, err)
        throw new Error('erro no serviço de login');
    }
}

