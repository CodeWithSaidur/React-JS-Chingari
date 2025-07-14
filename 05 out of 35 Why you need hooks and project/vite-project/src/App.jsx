import { useState } from 'react'

export const App = () => {
  const [counter, setCounter] = useState(1)
  let n = counter
  if (n <= 0) {
    n = 0
  }
  return (
    <>
      {n}
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}>
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}>
        -
      </button>
    </>
  )
}
