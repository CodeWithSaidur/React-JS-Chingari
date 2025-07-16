import { useCallback, useEffect, useState } from 'react'

export const App = () => {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeCharrecter, setincludeCharrecter] = useState(true)
  const [token, setToken] = useState('')

  // console.log('Length', length)
  // console.log('Numbers', includeNumbers)
  // console.log('Charrecters', includeCharrecter)
  // console.log('_____________________________')

  // generate token
  const generateToken = useCallback(() => {
    let ListOfCharrecter =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (includeNumbers) {
      ListOfCharrecter += '1234567890'
    }

    if (includeCharrecter) {
      ListOfCharrecter += '!@#$%^&*(*)_+-='
    }

    let generatedToken = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * ListOfCharrecter.length
      )
      generatedToken += ListOfCharrecter.charAt(randomIndex)
    }

    setToken(generatedToken)
  }, [length, includeNumbers, includeCharrecter])

  useEffect(() => {
    generateToken()
  }, [generateToken])

  return (
    <div>
      <h1>Password Generaror</h1>
      <input
        type="text"
        value={token}
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
