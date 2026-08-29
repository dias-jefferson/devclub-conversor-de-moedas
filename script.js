const convertButton = document.querySelector(".convert-button") // variável para fazer a varredura do botão
const currencySelect = document.querySelector(".selectCurrencyToConvert") // variável para fazer a 


    const moedas = {
        dolar: {
            nome: "Dólar Americano",
            valor: 5.2,
            imagem: "./assets/dolar.png",
            currency: "USD",
            locale: "en-US"
        },
        euro: {
            nome: "Euro",
            valor: 6.2,
            imagem: "./assets/euro.png",
            currency: "EUR",
            locale: "de-DE"
        },
        libra: {
            nome: "Libra Esterlina",
            valor: 6.5,
            imagem: "./assets/libra.png",
            currency: "GBP",
            locale: "en-GB"
        },
        iene: {
            nome: "Iene Japonês",
            valor: 0.038,
            imagem: "./assets/iene.png",
            currency: "JPY",
            locale: "ja-JP"
        },
        bitcoin: {
            nome: "Bitcoin",
            valor: 100,
            imagem: "./assets/bitcoin.png",
            currency: "BTC",
            locale: "en-US"
        }
    }


// função que realiza a conversão dos valores
function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrencyValue").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor do real a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value-converted") // outras moedas



    const moeda = moedas[currencySelect.value] // pega o valor da moeda selecionada no select

    const moedaConvertida = inputCurrencyValue / moeda.valor // realiza a conversão do valor do real para a moeda selecionada

    //const realToday = 1
    // const dolarToday = 5.2
    // const euroToday = 6.2
    // const poundToday = 6.5
    // const yenToday = 0.038
    // const bitcoinToday = 100


    // switch (currencySelect.value) {
    //     case "dolar":
    //         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD"
    //         }).format(moedaConvertida)
    //         break;

    //     case "euro":
    //         currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    //             style: "currency",
    //             currency: "EUR"
    //         }).format(moedaConvertida)
    //         break;

    //     case "libra":
    //         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
    //             style: "currency",
    //             currency: "GBP"
    //         }).format(moedaConvertida)
    //         break;

    //     case "iene":
    //         currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
    //             style: "currency",
    //             currency: "JPY"
    //         }).format(moedaConvertida)
    //         break;

    //     case "bitcoin":
    //         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "BTC"
    //         }).format(moedaConvertida)
    //         break;
    //     }

    //formatação da moeda a ser convertida, no caso aqui o real brasileiro
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    //formatação da moeda convertida, no caso aqui a moeda selecionada no select
    currencyValueConverted.innerHTML = new Intl.NumberFormat(moeda.locale, {
        style: "currency",
        currency: moeda.currency
    }).format(moedaConvertida)
}

function changeCurrency() {
    const currencyName = document.querySelector(".cvcName")
    const currencyImage = document.querySelector(".cvcImage")
    const moeda = moedas[currencySelect.value] // pega o valor da moeda selecionada no select

    currencyName.innerHTML = moeda.nome // atualiza o nome da moeda convertida
    currencyImage.src = moeda.imagem // atualiza a imagem da moeda convertida

    // switch (currencySelect.value) {
    //     case "dolar":
    //         currencyName.innerHTML = "Dólar"
    //         currencyImage.src = "./assets/dolar.png"
    //         break;
    //     case "euro":
    //         currencyName.innerHTML = "Euro"
    //         currencyImage.src = "./assets/euro.png"
    //         break;
    //     case "libra":
    //         currencyName.innerHTML = "Libra Esterlina"
    //         currencyImage.src = "./assets/libra.png"
    //         break;
    //     case "iene":
    //         currencyName.innerHTML = "Iene Japonês"
    //         currencyImage.src = "./assets/iene.png"
    //         break;
    //     case "bitcoin":
    //         currencyName.innerHTML = "Bitcoin"
    //         currencyImage.src = "./assets/bitcoin.png"
    //         break;
    // }

    convertValues() // Chama a função de conversão para atualizar os valores quando a moeda for alterada
}

currencySelect.addEventListener("change", changeCurrency) // Evento do select
convertButton.addEventListener("click", convertValues) // Evento do botão de conversão