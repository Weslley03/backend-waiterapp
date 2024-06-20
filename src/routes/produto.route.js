import { Router } from 'express'
import { createProduto } from '../controllers/produto.controller';

const router = Router();

router.post('/cadastrarProduto', createProduto)

export default router;