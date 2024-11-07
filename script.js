const dataInicio = new Date('2022-09-23');
let dataAtual = new Date();

const anosElement = document.getElementById('anos');
const mesesElement = document.getElementById('meses');
const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

function atualizarTempoNamoro() {
    dataAtual = new Date();

    const tempoNamoro = dataAtual - dataInicio;

    const anos = Math.floor(tempoNamoro / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((tempoNamoro % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((tempoNamoro % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoNamoro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoNamoro % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoNamoro % (1000 * 60)) / 1000);

    anosElement.innerHTML = anos;
    mesesElement.innerHTML = meses;
    diasElement.innerHTML = dias;
    horasElement.innerHTML = horas;
    minutosElement.innerHTML = minutos;
    segundosElement.innerHTML = segundos;
}

setInterval(atualizarTempoNamoro, 1000);
