import { createService } from '../services/userService.js'

export async function create(req, res){
    try{

        const { body } = req;

        if(!body){
            return res.status(400).send({message: 'o corpo da requicição está faltando'})
        }

        const { email, password, userCategory } = body

        if(!email || !password || !userCategory){
            return res.status(400).send({message: 'existem dados faltantes'})
        }

        //console.log(body)
        const user = await createService(body);

        if(!user){
            return res.status(400).send({message: 'o createService não funcionou'})
        }

        return res.status(200).send({message: 'user create succesfully', user})
    }catch(err){
        console.log(`houve algum erro no controlelr`, err)
        return res.status(500).send({message: 'ERROR AO TENTAR CRIAR O USUARIO'})
    }
}