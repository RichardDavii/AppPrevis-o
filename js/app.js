//e0283766cee7e7e70be7e75409ae8042
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//PEGANDO DA ARVORE DOM
/*
const inputCidade = document.querySelector(".input-cidade")
const btnClick = document.querySelector("#BtnID")
*/

const key = 'e0283766cee7e7e70be7e75409ae8042'


function coletaDados(){
    const inputCidade = document.querySelector(".input-cidade").value
    BuscaAPI(inputCidade)
}


async function BuscaAPI(cidade){
let dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
.then(res => res.json())
console.log(dado)
TrocarInfo(dado)
}


function TrocarInfo(dado){
document.querySelector(".titulo").innerHTML = dado.name
document.querySelector(".temperatura").innerHTML = Math.floor(dado.main.temp) + '°C'
document.querySelector(".texto-previsao").innerHTML = dado.weather[0].description
document.querySelector(".umidade").innerHTML = "Umidade relativa do ar: "+dado.main.humidity + "%"
document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dado.weather[0].icon}.png`
document.querySelector(".vento").innerHTML = "Vento: "+ Math.floor(dado.wind.speed) +"km/h"

}
