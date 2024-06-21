import { createProdutoService, findProdutoByCategoryService } from '../services/produtoService.js'

export async function createProduto(req, res){
    try{
        const { nomeProduto, valorProduto, produtoCategory } = req.body;

        if(!nomeProduto || !valorProduto || !produtoCategory){
            return res.status(400).json({message: 'existem dados faltantes'})
        }

        const produto = await createProdutoService(nomeProduto, valorProduto, produtoCategory)

        if(!produto){
            return res.status(400).json({message: 'não foi possivel cadastrar esse produto'})
        }

        return produto;
    }catch(err){
        console.log(err)
    }
}

export async function findProdutoByCategory(req, res){
    try{
        const { category } = req.query
        console.log(category)
        console.log(typeof(category))
        if(!category){
            return res.status(400).json({message: 'existem dados faltantes'})
        }

        const produtos = await findProdutoByCategoryService(category);
        if(!produtos){
            return res.status(400).json({message: 'não foi possivel puxar os produtos'})
        }

        return res.json(produtos);
    }catch(err){
        console.log(err)
    }
}