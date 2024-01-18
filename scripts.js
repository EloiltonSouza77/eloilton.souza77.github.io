const converterBotao = document.querySelector(".butao1")
const dadosBandeira = document.querySelector(".bandeira")
const selecionarPais = document.querySelector(".selectPis")


function converterMoedas(){

const dadosDoImput = document.querySelector(".inputDados").value
const realDoInput = document.querySelector(".real")
const valorConvertido = document.querySelector(".america")


const valorDolar = 5.2
const valorEuro = 6.2
const valorLibra = 6.22
const valorBitcoin = 255.74242
const valorXAF = 0.0082



if(dadosBandeira.value == "dolar"){valorConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(dadosDoImput / valorDolar)}
if (dadosBandeira.value == "euro"){valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(dadosDoImput / valorEuro)}
if (dadosBandeira.value == "libra"){valorConvertido.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "GBP" }).format(dadosDoImput / valorLibra)}
if (dadosBandeira.value == "bitcoin"){valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "BTC" }).format(dadosDoImput / valorBitcoin)}
if (dadosBandeira.value == "gabao"){valorConvertido.innerHTML = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XAF" }).format(dadosDoImput / valorXAF)}


{realDoInput .innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dadosDoImput)}



}

function trocarbandeiras (){
    const dolarAm = document.getElementById("dolarA")
    const imgbandeira = document.querySelector(".su")
   


    if (dadosBandeira.value == "dolar"){ dolarAm.innerHTML = "Dólar Americano"
    imgbandeira.src = "./Assets/estados-unidos (1) 1.png"
    converterMoedas()}
    
    if (dadosBandeira.value == "euro"){ dolarAm.innerHTML = "Euro"
    imgbandeira.src = "./Assets/Design sem nome 3 (1).png"
    converterMoedas()}


if (dadosBandeira.value == "libra"){ dolarAm.innerHTML = "Libra"
    imgbandeira.src = "./Assets/libra 1 (1).png"
    converterMoedas()}

    if (dadosBandeira.value == "bitcoin"){ dolarAm.innerHTML = "Bitcoin"
    imgbandeira.src = "./Assets/bitcoin 1 (1).png"
    converterMoedas()}

    if (dadosBandeira.value == "gabao"){ dolarAm.innerHTML = "Franco CFA Central"
    imgbandeira.src = "./Assets/gabao.png"
    converterMoedas()}}


dadosBandeira.addEventListener("change", trocarbandeiras )
converterBotao.addEventListener("click", converterMoedas)



