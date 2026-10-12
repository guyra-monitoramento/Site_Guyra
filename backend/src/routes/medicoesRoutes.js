import express from "express";

import {
    criarMedidasController
} from '../controllers/medicoesController.js';

const router = express.Router();

router.post('/data', criarMedidasController);

export default router;