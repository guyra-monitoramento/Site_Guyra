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
    mostrarTempMed.textContent = `${temperatura.mediaTemperatura}°C`
}

pegarTemp();