import { useState, useEffect } from 'react'
// reads symbol from the URL
import { useParams } from 'react-router-dom'

// base URL for CoinAPI
const API_BASE = 'https://rest.coinapi.io/v1/exchangerate'

function Price() {
  // get symbol from URL
  const { symbol } = useParams()

  // stores the fetched price
  const [price, setPrice] = useState(null)
  // true while waiting for data
  const [loading, setLoading] = useState(true)
  // holds any error message
  const [error, setError] = useState(null)

  async function getCoin() {
    try {
      // fetch rate for symbol to USD
      const res = await fetch(
        `${API_BASE}/${symbol}/USD`,
        { headers: { 'X-CoinAPI-Key': import.meta.env.VITE_COINAPI_KEY } }
      )
      const data = await res.json()
      // save rate to state
      setPrice(data.rate)
    } catch (err) {
      console.error(err)
      setError('Could not load price.')
    } finally {
      // always turn off loading
      setLoading(false)
    }
  }

  // fetch when symbol changes
  useEffect(() => {
    getCoin()
  }, [symbol])

  return (
    <div className="price">
      <h1>{symbol}</h1>
      {/* show while fetching */}
      {loading && <p>Loading...</p>}
      {/* show if fetch failed */}
      {error && <p>{error}</p>}
      {/* show the price */}
      {price && <p>1 {symbol} = ${price.toLocaleString()} USD</p>}
    </div>
  )
}

export default Price
