import Produto from "../models/Produto.js"

export async function createProdutoService(nomeProduto, valorProduto, produtoCategory){
    try{
        const produto = await Produto.create({nomeProduto, valorProduto, produtoCategory })
        return produto;
    }catch(err){
        console.log('houve um erro no service do back', err)
    }
}

export async function findProdutoByCategoryService(category){
    try{
        const produtos = await Produto.find({produtoCategory: category})
        return produtos
    }catch(err){
        console.log(err)
    }
}

export async function findByNameService(nome){
    try{
        const produto = await Produto.find({nomeProduto: { $regex: new RegExp(nome, 'i')}})
        if(produto.length === 0){
            return {ok: false, message: 'não foi posivel encontrar esse produto em baco'}
        }

        return {ok: true, produto}
    }catch(err){
        console.log(err)
    }
} 

