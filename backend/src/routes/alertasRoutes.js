import express from "express";

import {
    pegarAlertasController
} from '../controllers/alertasController.js';

const router = express.Router();

router.get('/alertas', pegarAlertasController);

export default router;