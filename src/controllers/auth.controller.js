import { loginService, generateToken } from '../services/authService.js'
import bcrypt from "bcrypt";

async function login(req, res){
    try{
        const { body } = req;

        if(!body){
            return res.status(400).send({message: 'o corpo da requicição de LOGIN está faltando'})
        }

        const { email, password, userCategory } = body;

        if(!email || !password || !userCategory){
            return res.status(400).send({message: 'existem dados faltantes'})
        }

        const user = await loginService(email);

        if(!user){
            return res.status(400).send({message: 'usuario ou senha invalidos'})
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        if(!passwordIsValid){
            return res.status(400).send({message: 'usuario ou senha invalidos'})
        }

        const category = userCategory == user.userCategory

        if(!category){
            return res.status(400).send({message: 'defina a categoria de usuario correta.'})
        }

        const token = await generateToken(user.id)

        res.send({token})

    }catch(err){
        console.log(err)
    }
}

export default login;