import React, { useState } from 'react';

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);

  // Hardcoded exchange rates relative to USD
  const exchangeRates = {
    USD: 1,
    EUR: 0.96,
    JPY: 158,
    INR: 84,
  };

  // Calculate the converted amount
  const convertedAmount = (
    (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency]
  ).toFixed(2);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-gradient-to-r from-slate-950 via-purple-500 to-green-400 text-white shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Currency Converter</h1>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="fromCurrency" className="block text-sm font-medium mb-2">
              From
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="block w-full px-4 py-2 border border-transparent rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="toCurrency" className="block text-sm font-medium mb-2">
              To
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="block w-full px-4 py-2 border border-transparent rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="block w-full px-4 py-2 border border-transparent rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
