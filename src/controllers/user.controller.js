import { createService } from '../services/userService.js'
import { generateToken } from '../services/authService.js';

export async function create(req, res){
    try{

        const { email, password, userCategory } = req.body

        if(!email || !password || !userCategory){
            return res.status(400).json({message: 'existem dados faltantes'})
        }

        const { ok, user, message } = await createService(email, password, userCategory);

        if(!ok){
            return res.status(400).json({ message })
        }
        

        const token = generateToken(user.id)

        return res.status(200).send({
            message: message,
            token: token,
            
            user: {
                id: user._id,
                email,
                userCategory
            }
        })
    }catch(err){
        console.log(`houve algum erro no controller`, err)
        return res.status(500).send({message: 'ERROR AO TENTAR CRIAR O USUARIO'})
    }
}