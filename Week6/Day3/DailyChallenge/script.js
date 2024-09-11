const API_KEY = '54ddb696505d0b70f5560145';  // Replace with your actual API key

const currencyCodesUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.statusText}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

function renderCurrency(currencies) {
    currencies.forEach(([code, name]) => {
        const optionElement = document.createElement('option');
        optionElement.value = code;
        optionElement.textContent = `${code} - ${name}`;
        fromCurrency.appendChild(optionElement.cloneNode(true));
        toCurrency.appendChild(optionElement);
    });
}

function renderConversion(conversionData) {
    const from = conversionData.base_code;
    const to = conversionData.target_code;
    // const conversionRate = conversionData.conversion_rate;
    const conversionResult = conversionData.conversion_result;
    result.textContent = `${amount.value} ${from} = ${conversionResult} ${to}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData(currencyCodesUrl);
    renderCurrency(data.supported_codes)
})

convertBtn.addEventListener('click', async () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amt = amount.value;

    const data = await getData(`${exchangeRateUrl}/${from}/${to}/${amt}`);
    renderConversion(data);
});
