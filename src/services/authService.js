import User from '../models/User.js'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

export function generateToken(id){
    return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: 86400})
}

export function loginService(email){
    try{
        return User.findOne({email: email}).select(`+password`)
    }catch(err){
        console.log(`deu erro no loginService, back `, err)
    }
}

