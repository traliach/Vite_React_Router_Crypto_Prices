import { Link } from 'react-router-dom'

// list of crypto symbols
const currencies = [
  'BTC', 'ETH', 'LTC', 'XRP', 'BCH',
  'ADA', 'DOT', 'LINK', 'XLM', 'DOGE',
]

function Currencies() {
  return (
    <div className="currencies">
      <h1>Currencies</h1>
      <ul>
        {/* each symbol links to its price page */}
        {currencies.map((symbol) => (
          <li key={symbol}>
            <Link to={`/price/${symbol}`}>{symbol}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Currencies
