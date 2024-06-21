import { createProdutoService } from '../services/produtoService.js'

export async function createProduto(req, res){
    try{
        const { nomeProduto, valorProduto } = req.body;

        if(!nomeProduto || !valorProduto){
            return res.status(400).json({message: 'existem dados faltantes'})
        }

        const produto = await createProdutoService(nomeProduto, valorProduto)

        if(!produto){
            return res.status(400).json({message: 'não foi possivel cadastrar esse produto'})
        }

        return produto;
    }catch(err){
        console.log(err)
    }
}