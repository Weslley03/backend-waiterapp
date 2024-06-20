import Produto from "../models/Produto"

export async function createProdutoService(nomeProduto, valorProduto){
    try{
        const produto = await Produto.create({nomeProduto, valorProduto})
        return produto;
    }catch(err){
        console.log('houve um erro no service do back', err)
    }
}