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

  // stores all three rates
  const [rates, setRates] = useState(null)
  // true while waiting for data
  const [loading, setLoading] = useState(true)
  // holds any error message
  const [error, setError] = useState(null)

  async function getCoin() {
    try {
      // fetch price in USD and EUR only
      const res = await fetch(
        `${API_BASE}?ids=${symbol}&vs_currencies=usd,eur`
      )
      const data = await res.json()
      // throw if API returned an error
      if (!res.ok) throw new Error('API error')
      // XOF is pegged to EUR: 1 EUR = 655.957 XOF
      const xof = data[symbol].eur * 655.957
      // save all rates to state
      setRates({ ...data[symbol], xof })
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
      {/* show the current USD price */}
      {rates && (
        <p className="current-price">1 {symbol} = ${rates.usd.toLocaleString()} USD</p>
      )}
      {/* conversion table with USD, EUR, XOF */}
      {rates && (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>USD</th>
              <th>EUR</th>
              <th>XOF</th>
            </tr>
          </thead>
          <tbody>
            {amounts.map((amt) => (
              <tr key={amt}>
                <td>{amt} {symbol}</td>
                <td>${(amt * rates.usd).toLocaleString()}</td>
                <td>€{(amt * rates.eur).toLocaleString()}</td>
                <td>{(amt * rates.xof).toLocaleString()} XOF</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Price
