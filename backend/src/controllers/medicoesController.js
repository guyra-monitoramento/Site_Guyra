import {
    criarMedidas,
    pegarMedidas,
    mediaHora
} from '../models/medicoesModel.js';
import {
    checarMedidas
} from '../services/alertaService.js'

const criarMedidasController = async (req, res) => {
    try{
        const { temperatura, umidade } = req.body;
        
        if (temperatura === null || temperatura === undefined || umidade === undefined || umidade === null){
            return res.status(400).json({erro: "Erro na coleta dos campos"});
        }

        const medicoes = await criarMedidas (temperatura, umidade);
        await checarMedidas (temperatura, umidade);

        res.status(201).json(medicoes);
    } catch (e){
        res.status(500).json({erro: "Falha ao cadastrar as medidas"});
    }
};

const pegarMedidasController = async(req, res) => {
    try {
        const medicoes = await pegarMedidas();

        if (medicoes === null){
            return res.status(404).json({erro: "Nenhum medição foi encontrada no banco de dados"});
        }

        res.status(200).json(medicoes);
    } catch (e){
        res.status(500).json({erro: "Falha ao pegar as medidas"})
    }
}

const mediaHoraController = async(req, res) => {
    try{
        const medicoes = await mediaHora();

        if(medicoes === null){
            return res.status(400).json({erro: "Nenhuma medida encontrada"})
        } else {
            if (medicoes.mediaTemperatura === null || medicoes.mediaUmidade === null){
                return res.status(404).json({erro:"Nenhuma medição foi encontrada no banco de dados"});
            }

            res.status(200).json(medicoes);
        }
    } catch (e){
        res.status(500).json({erro: "Falha ao pegar as medidas"});
    }
}

export {
    criarMedidasController,
    pegarMedidasController,
    mediaHoraController
};