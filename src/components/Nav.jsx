// Link navigates without page reload
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      {/* link to home */}
      <Link to="/">Home</Link>
      {/* link to currencies list */}
      <Link to="/currencies">Currencies</Link>
    </nav>
  )
}

export default Nav
