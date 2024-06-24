import { Router } from 'express'
import { createProduto, findProdutoByCategory, findByName } from '../controllers/produto.controller.js';

const router = Router();

router.post('/cadastrarProduto', createProduto)
router.get('/ProdutoCategoria', findProdutoByCategory)
router.get('/produtoNome', findByName)

export default router;