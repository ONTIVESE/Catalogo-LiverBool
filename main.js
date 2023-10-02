// const newClass = document.querySelector('.pc-escritorio');
// newClass.classList.add('fil');

let pcEscritorio = document.getElementsByClassName("pc-escritorio");
let pcPortatil = document.getElementsByClassName("pc-portatil");
let monitores = document.getElementsByClassName("monitores");
let teclado = document.getElementsByClassName("teclado");
let mouse = document.getElementsByClassName("mouse");
let cpu = document.getElementsByClassName("cpu");
let tarjetaMadre = document.getElementsByClassName("tarjeta-madre");
let memoriaRam = document.getElementsByClassName("memoria-ram");
let tarjetaDeVideo = document.getElementsByClassName("tarjeta-de-video");
let procesador = document.getElementsByClassName("procesador");
let discoDuroExterno = document.getElementsByClassName("disco-duro-externo");
let discoSsd = document.getElementsByClassName("disco-ssd");
let camaraWeb = document.getElementsByClassName("camara-web");

function todosF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.remove("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.remove("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.remove("filter");

    for (let i = 0; i < teclado.length; i++)
        teclado[i].classList.remove("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.remove("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.remove("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.remove("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.remove("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.remove("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.remove("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.remove("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.remove("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.remove("filter");
}

function pcEscritorioF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.remove("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function pcPortatilF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.remove("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function monitoresF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.remove("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function tecladoF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++)
        teclado[i].classList.remove("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function mouseF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.remove("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function cpuF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.remove("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function tarjetaMadreF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.remove("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function memoriaRamF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.remove("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function tarjetaDeVideosF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.remove("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function procesadorF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.remove("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function discoDuroExternosF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.remove("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function unidadSsdF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.remove("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.add("filter");
}

function camaraWebF() {
    for (let i = 0; i < pcEscritorio.length; i++)
        pcEscritorio[i].classList.add("filter");

    for (let i = 0; i < pcPortatil.length; i++)
        pcPortatil[i].classList.add("filter");

    for (let i = 0; i < monitores.length; i++)
        monitores[i].classList.add("filter");

    for (let i = 0; i < teclado.length; i++) teclado[i].classList.add("filter");

    for (let i = 0; i < mouse.length; i++) mouse[i].classList.add("filter");

    for (let i = 0; i < cpu.length; i++) cpu[i].classList.add("filter");

    for (let i = 0; i < tarjetaMadre.length; i++)
        tarjetaMadre[i].classList.add("filter");

    for (let i = 0; i < memoriaRam.length; i++)
        memoriaRam[i].classList.add("filter");

    for (let i = 0; i < tarjetaDeVideo.length; i++)
        tarjetaDeVideo[i].classList.add("filter");

    for (let i = 0; i < procesador.length; i++)
        procesador[i].classList.add("filter");

    for (let i = 0; i < discoDuroExterno.length; i++)
        discoDuroExterno[i].classList.add("filter");

    for (let i = 0; i < discoSsd.length; i++)
        discoSsd[i].classList.add("filter");

    for (let i = 0; i < camaraWeb.length; i++)
        camaraWeb[i].classList.remove("filter");
}
