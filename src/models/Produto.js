import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: {
        type: String,
        require: true
    },
    valorProduto: {
        type: Number,
        require: true
    },
    produtoCategory: {
        type: String,
        require: true
    } 
})

const Produto = mongoose.model('Produto', ProdutoSchema)

export default Produto;