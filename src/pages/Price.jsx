import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const API_BASE = 'https://rest.coinapi.io/v1/exchangerate'

function Price() {
  const { symbol } = useParams()
  const [price, setPrice] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getCoin() {
    try {
      const res = await fetch(
        `${API_BASE}/${symbol}/USD`,
        { headers: { 'X-CoinAPI-Key': import.meta.env.VITE_COINAPI_KEY } }
      )
      const data = await res.json()
      setPrice(data.rate)
    } catch (err) {
      console.error(err)
      setError('Could not load price.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCoin()
  }, [symbol])

  return (
    <div className="price">
      <h1>{symbol}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {price && <p>1 {symbol} = ${price.toLocaleString()} USD</p>}
    </div>
  )
}

export default Price
