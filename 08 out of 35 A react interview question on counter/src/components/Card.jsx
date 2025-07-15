import { useState } from 'react'

export const Card = () => {
  const [a, seta] = useState(0)

  function add() {
    seta(a => {
      return a + 1
    })
    seta(a => {
      return a + 1
    })
    seta(a => {
      return a + 1
    })
  }

  function sub() {
    seta(a - 1)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h1 className="text-9xl">{a}</h1>
      <button
        className="bg-amber-500 m-2 border-8 rounded-2xl"
        onClick={add}>
        ADD
      </button>
      <button
        className="bg-amber-500 m-2 border-8 rounded-2xl"
        onClick={sub}>
        SUB
      </button>
    </div>
  )
}
