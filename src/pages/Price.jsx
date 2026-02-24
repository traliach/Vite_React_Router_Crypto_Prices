import { useState, useEffect } from 'react'
// reads symbol from the URL
import { useParams } from 'react-router-dom'

// CoinGecko free API, no key needed
const API_BASE = 'https://api.coingecko.com/api/v3/simple/price'

// amounts to show in conversion table
const amounts = [1, 5, 10, 50, 100]

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
      // fetch price in USD
      const res = await fetch(
        `${API_BASE}?ids=${symbol}&vs_currencies=usd`
      )
      const data = await res.json()
      // throw if API returned an error
      if (!res.ok) throw new Error('API error')
      // save rate to state
      setPrice(data[symbol].usd)
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
      {/* show the current price */}
      {price && (
        <p className="current-price">1 {symbol} = ${price.toLocaleString()} USD</p>
      )}
      {/* conversion table */}
      {price && (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>USD Value</th>
            </tr>
          </thead>
          <tbody>
            {amounts.map((amt) => (
              <tr key={amt}>
                <td>{amt} {symbol}</td>
                <td>${(amt * price).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Price
