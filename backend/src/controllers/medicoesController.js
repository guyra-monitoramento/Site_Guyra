import {
    criarMedidas
} from '../models/medicoesModel.js';

const criarMedidasController = async (req, res) => {
    try{
        const { temperatura, umidade } = req.body;
        
        if (temperatura === null || temperatura === undefined || umidade === undefined || umidade === null){
            return res.status(400).json({erro: "Erro na coleta dos campos"});
        }

        const medicoes = await criarMedidas (temperatura, umidade);

        res.status(201).json(medicoes);
    } catch (e){
        res.status(500).json({erro: "Falha ao cadastrar as medidas"});
    }
};

export {
    criarMedidasController
};