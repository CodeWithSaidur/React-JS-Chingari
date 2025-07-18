import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg')`
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={e => {
              e.preventDefault()
              convert()
            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={currency => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={value => setAmount(value)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={to}
                amountDesable
                currencyDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:cursor-pointer">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
