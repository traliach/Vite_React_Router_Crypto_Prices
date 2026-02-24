import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/currencies">Currencies</Link>
    </nav>
  )
}

export default Nav
