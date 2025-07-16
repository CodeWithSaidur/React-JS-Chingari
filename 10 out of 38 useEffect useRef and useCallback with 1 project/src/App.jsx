import { useState } from 'react'

export const App = () => {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeCharrecter, setincludeCharrecter] = useState(true)

  // console.log('Length', length)
  // console.log('Numbers', includeNumbers)
  // console.log('Charrecters', includeCharrecter)
  // console.log('_____________________________')

  return (
    <div>
      <h1>Password Generaror</h1>
      <input
        type="text"
        style={{ border: '2px solid red', borderRadius: '10px' }}
      />{' '}
      <br />
      <input
        type="button"
        value="Click"
        style={{
          border: '2px solid blue',
          borderRadius: '10px',
          padding: '5px',
          margin: '2px'
        }}
      />{' '}
      <br />
      <input
        type="range"
        min={8}
        max={100}
        value={length}
        onChange={e => {
          setLength(Number(e.target.value))
        }}
        className="cursor-pointer"
      />{' '}
      <label htmlFor="">Length {length}</label> <br />
      <input
        type="checkbox"
        checked={includeNumbers}
        onChange={() => {
          setIncludeNumbers(ex => !ex)
        }}
      />{' '}
      <label htmlFor="">Include Number</label> <br />
      <input
        type="checkbox"
        checked={includeCharrecter}
        onChange={() => {
          setincludeCharrecter(ex => !ex)
        }}
      />{' '}
      <label htmlFor="">Include Charrecter</label> <br />
    </div>
  )
}
