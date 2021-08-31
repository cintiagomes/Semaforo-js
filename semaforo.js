"use strict"

const semaforo = document.getElementById("semaforo")
let idAutomatico

function leds(corVermelho, corAmarelo, corVerde) {
    const button_verde = document.getElementById("button_verde")
    const button_amarelo = document.getElementById("button_amarelo")
    const button_vermelho = document.getElementById("button_vermelho")
}

function ledVerde() {
    document.getElementById("semaforo").src = "img/vermelho.png"
}
function ledAmarelo() {
    document.getElementById("semaforo").src = "img/amarelo.png"
}
function ledVermelho() {
    document.getElementById("semaforo").src = "img/verde.png"
}

function ledAutomatico(){
    if(ledVerde()){
        ledVerde()
    }else if(ledAmarelo()){
        ledAmarelo()
    }else{
        ledVermelho()
    }
}


function button_automatico(){
    const button_automatico = document.getElementById("button_automatico")
    idAutomatico = setInterval(ledAutomatico, 200)
}

document.getElementById("button_verde").addEventListener("click", ledVerde)
document.getElementById("button_amarelo").addEventListener("click", ledAmarelo)
document.getElementById("button_vermelho").addEventListener("click", ledVermelho)
document.getElementById("button_automatico").addEventListener("click", ledAutomatico)