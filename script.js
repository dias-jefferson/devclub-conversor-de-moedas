const convertButton = document.querySelector(".convert-button") // variável para fazer a varredura do botão
const currencySelect = document.querySelector(".selectCurrencyToConvert") // variável para fazer a 
// função que realiza a conversão dos valores
function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrencyValue").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor do real a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value-converted") // outras moedas


    //const realToday = 1
    const dolarToday = 5.2
    const euroToday = 6.2
    const poundToday = 6.5
    const yenToday = 0.038
    const bitcoinToday = 100


    switch (currencySelect.value) {
        case "dolar":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
            break;

        case "euro":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
            break;

        case "libra":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / poundToday)
            break;

        case "iene":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue / yenToday)
            break;

        case "bitcoin":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
            break;
        }

    //formatação da moeda a ser convertida, no caso aqui o real brasileiro
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector(".cvcName")
    const currencyImage = document.querySelector(".cvcImage")

    switch (currencySelect.value) {
        case "dolar":
            currencyName.innerHTML = "Dólar"
            currencyImage.src = "./assets/dolar.png"
            break;
        case "euro":
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
            break;
        case "libra":
            currencyName.innerHTML = "Libra Esterlina"
            currencyImage.src = "./assets/libra.png"
            break;
        case "iene":
            currencyName.innerHTML = "Iene Japonês"
            currencyImage.src = "./assets/iene.png"
            break;
        case "bitcoin":
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin.png"
            break;
    }

    convertValues() // Chama a função de conversão para atualizar os valores quando a moeda for alterada
}

currencySelect.addEventListener("change", changeCurrency) // Evento do select
convertButton.addEventListener("click", convertValues) // Evento do botão de conversão