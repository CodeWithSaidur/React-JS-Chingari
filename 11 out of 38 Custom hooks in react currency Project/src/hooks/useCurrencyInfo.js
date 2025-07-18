import { useEffect, useState } from 'react'

function useCurrencyInfo(currcncy) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (!currcncy) return
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currcncy}.json`
    )
      .then(res => res.json())
      .then(res => setData(res[currcncy]))
      .catch(err => {
        console.log(
          'Faild to fetch Currency Error in useCurrencyInfo.js',
          err
        )
        setData({})
      })
  }, [currcncy])
  console.log(data)
  return data
}

export default useCurrencyInfo
