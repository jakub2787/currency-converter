{
    const calculatorResult = (currency, amount) => {
        const USD = 4.85;
        const EUR = 4.78;
        const NOK = 0.46;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "NOK":
                return amount / NOK;
        }
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const resultElement = document.querySelector(".js-result");
            const currencyElement = document.querySelector(".js-currency");
            const amountElement = document.querySelector(".js-amount");
            
            const currency = currencyElement.value;
            const amount = amountElement.value;
            const result = calculatorResult(currency, amount);

            resultElement.innerText = result.toFixed(2);
        })
    }
    init ();
}
