import {
    pegarAlertas
} from '../models/alertasModel.js';

const pegarAlertasController = async (req, res) => {
    try{
        const alertas = await pegarAlertas();

        res.status(200).json(alertas)
    } catch (e){
        res.status(500).json({erro: "Falha ao pegar as medidas"})
    }
}

export {
    pegarAlertasController
}