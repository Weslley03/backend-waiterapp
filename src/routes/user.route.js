import { Router } from "express";
import { create } from '../controllers/user.controller.js'

const router = Router();

router.post('/cadastrar', create)

export default router;