const openButtons = document.querySelectorAll('.abrirModal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        document.body.classList.add('desativarScroll');

        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll('.fecharModal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        document.body.classList.remove('desativarScroll');

        modal.close();
    });
});

const mostrarTempMed = document.getElementById('temp');

async function pegarTemp(){
    const retorno = await fetch('http://localhost:3002/guyra/data/media-hora');
    const temperatura = await retorno.json()
    mostrarTemp(temperatura)
}

function mostrarTemp(temperatura){
    mostrarTempMed.textContent = `${Number(temperatura.mediaTemperatura).toFixed(2)}°C`
}

setInterval(function(){
    pegarTemp();
}, 60000)
pegarTemp();

const mostrarUmidMed = document.getElementById('umid');

async function pegarUmid(){
    const retorno = await fetch ('http://localhost:3002/guyra/data/media-hora');
    const umidade = await retorno.json();
    mostrarUmid(umidade);
}

function mostrarUmid(umidade){
    mostrarUmidMed.textContent = `${Number(umidade.mediaUmidade).toFixed(0)}%`
}

setInterval(function (){
    pegarUmid();
}, 60000)
pegarUmid();


const setT = new Set();
async function alertaT (){
    const retorno = await fetch ('http://localhost:3002/guyra/alertas');
    const temperatura = await retorno.json();
    for (const alertaAgora of temperatura){
        const id = alertaAgora.id;
        if(alertaAgora.medida == "temperatura"){
            if (!setT.has(id)){
            const tempAlerta = document.getElementById('alertaTemp');
            const mensagem = document.createElement("div");
            const texto = document.createElement("p");
            const data = document.createElement("h3");
            const valor = document.createElement("h3");
            const hora = new Date(alertaAgora.data_hora);
            texto.textContent = `${alertaAgora.mensagem}`
            data.textContent = `Horário: ${hora.toLocaleString("pt-BR")} | Valor capturado: ${alertaAgora.valor}°C`
            mensagem.classList.add("divAlerta");
            mensagem.appendChild(data);
            mensagem.appendChild(valor);
            mensagem.appendChild(texto);
            tempAlerta.appendChild(mensagem);
            set.add(id);
            }
        }
    }
}

setInterval(function(){
    alertaT();
}, 60000)
alertaT();
