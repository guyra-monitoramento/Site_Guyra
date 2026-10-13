import express from "express";

import {
    criarMedidasController,
    pegarMedidasController,
    mediaHoraController
} from '../controllers/medicoesController.js';

const router = express.Router();

router.post('/data', criarMedidasController);
router.get('/data', pegarMedidasController);
router.get('/data/media-hora', mediaHoraController);

export default router;