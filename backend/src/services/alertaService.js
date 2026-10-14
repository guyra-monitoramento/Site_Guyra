import{
    criarAlertas
} from '../models/alertasModel.js';

let alertaTemperaturaAlta = false;
let alertaUmidadeAlta = false;
let alertaUmidadeBaixa = false;
let alertaTemperaturaBaixa = false;
const checarMedidas = async (temperatura, umidade) => {
    if (temperatura >= 35 && alertaTemperaturaAlta == false){
        await criarAlertas("temperatura", temperatura, "Alerta - Temperatura Alta: A temperatura registrada é considerada um risco para sua criação");
        alertaTemperaturaAlta = true
    } if (temperatura <= 10 && alertaTemperaturaBaixa == false){
        await criarAlertas("temperatura", temperatura, "Alerta - Temperatura Baixa: A temperatura registrada é considerada um risco para sua criação");
        alertaTemperaturaBaixa = true
    } if (temperatura <= 28 && alertaTemperaturaAlta == true){
        alertaTemperaturaAlta = false;
    } if (temperatura >= 18 && alertaTemperaturaBaixa){
        alertaTemperaturaBaixa = false;
    }
    if (umidade >= 75 && alertaUmidadeAlta == false){
        await criarAlertas("umidade", umidade, "Alerta - Umidade Alta: A umidade registrada é considerada um risco para sua criação");
        alertaUmidadeAlta = true;
    } if (umidade <= 30 && alertaUmidadeBaixa == false){
        await criarAlertas("umidade", umidade, "Alerta - Umidade Baixa: A umidade registrada é considerada um risco para sua criação");
        alertaUmidadeBaixa = true;
    } if (umidade <= 60 && alertaUmidadeAlta == true){
        alertaUmidadeAlta = false;
    } if (umidade >= 35 && alertaUmidadeBaixa == true){
        alertaUmidadeBaixa = false;
    }
}

export {
    checarMedidas
};