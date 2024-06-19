import { loginService, generateToken } from '../services/authService.js'


async function login(req, res){
    try{

        const { email, password, userCategory } = req.body;

        if(!email || !password || !userCategory){
            return res.status(400).json({message: 'existem dados faltantes'})
        }

        const { valid, user, message } = await loginService(email, password, userCategory);

        if(!valid){
            return res.status(400).json({ message })
        }

        const token = await generateToken(user.id)

        res.send({token, message})

    }catch(err){
        console.log('houve algum erro no controller', err)
        return res.status(400).send({ message: 'erro interno do servidor' })
    }
}

export default login;