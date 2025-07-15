import { useState } from 'react'

export const Card = () => {
  const [color, setColor] = useState('red')
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor('red')
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColorv: 'red' }}>
            Red
          </button>
          <button
            onClick={() => {
              setColor('green')
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColorv: 'green' }}>
            Green
          </button>
        </div>
      </div>
    </div>
  )
}
