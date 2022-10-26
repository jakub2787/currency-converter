let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");

let USD = 4.85;
let EUR = 4.78;
let NOK = 0.46;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    switch (currency) {
        case "EUR":
        result = (amount/EUR);
        break;

        case "USD":
        result = (amount/USD);
        break;

        case "NOK":
        result = (amount/NOK);
        break;
    }
    resultElement.innerText = result.toFixed(2);    
})