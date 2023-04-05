let tiempoInicio = 0;
let tiempoTranscurrido = 0;
let intervalo;
let cronometroIniciado = false;

const tiempoMostrado = document.getElementById('tiempo');
const btnIniciar = document.getElementById('iniciar');
const btnPausar = document.getElementById('pausar');
const btnReiniciar = document.getElementById('reiniciar');

function actualizarCronometro() {
    tiempoTranscurrido = Date.now() - tiempoInicio;
  
    let horas = Math.floor(tiempoTranscurrido / 3600000);
    let minutos = Math.floor((tiempoTranscurrido % 3600000) / 60000);
    let segundos = Math.floor((tiempoTranscurrido % 60000) / 1000);

    if(horas<10){
        horas = '0' + horas;
    }

    if(minutos<10){
        minutos = '0' + minutos;
    }

    if(segundos<10){
        segundos = '0' + segundos;
    }
  
    tiempoMostrado.innerHTML = `${horas}:${minutos}:${segundos}`;
  }

  btnIniciar.addEventListener('click', iniciarCronometro);

  function iniciarCronometro() {
    if (!cronometroIniciado) {
      tiempoInicio = Date.now() - tiempoTranscurrido;
      intervalo = setInterval(actualizarCronometro, 1000);
      cronometroIniciado = true;
    }
  }
  
  btnPausar.addEventListener('click', pausarCronometro);

  function pausarCronometro() {
    clearInterval(intervalo);
    cronometroIniciado = false;
  }

  btnReiniciar.addEventListener('click', reiniciarCronometro);
  
  function reiniciarCronometro() {
    clearInterval(intervalo);
    cronometroIniciado = false;
    tiempoTranscurrido = 0;
    tiempoMostrado.innerHTML = '00:00:00';
  }
 
  
      