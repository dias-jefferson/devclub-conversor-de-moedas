const convertButton = document.querySelector(".convert-button") // variável para fazer a varredura do botão
const currencySelect = document.querySelector(".currency-select") // variável para fazer a varredura do select
//const currencySelect2 = document.querySelector(".currency-select2") // variável para fazer a varredura do select do topo

// função que realiza a conversão dos valores
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor do real a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    //const realToday = 1
    const dolarToday = 5.2 
    const euroToday = 6.2
    const poundToday = 6.5
    const bitcoinToday = 100


    if(currencySelect.value == "dolar"){ 
        //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ 
        //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        //se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / poundToday)
    }

    if(currencySelect.value == "bitcoin"){
        // se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    //formatação da moeda a ser convertida, no caso aqui o real brasileiro
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

//função que realiza a mudança para o resultado das conversões
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

/*função que realiza a mudança para o resultado das conversões
function changeCurrencyTop(){
    const currencyName = document.getElementById("currency-name2")
    const currencyImage = document.querySelector(".currency-img2")

    if (currencySelect2.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect2.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect2.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect2.value == "bitcoin"){
        currencyName.innerHTML == "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    

}*/

// currencySelect2.addEventListener("change",changeCurrencyTop) Evento do primeiro select
currencySelect.addEventListener("change", changeCurrency) // Evento do select
convertButton.addEventListener("click", convertValues) // Evento do botão de conversão