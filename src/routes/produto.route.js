import { Router } from 'express'
import { createProduto } from '../controllers/produto.controller.js';

const router = Router();

router.post('/cadastrarProduto', createProduto)

export default router;