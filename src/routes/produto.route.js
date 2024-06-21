import { Router } from 'express'
import { createProduto, findProdutoByCategory } from '../controllers/produto.controller.js';

const router = Router();

router.post('/cadastrarProduto', createProduto)
router.get('/ProdutoCategoria', findProdutoByCategory)

export default router;