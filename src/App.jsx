import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'

function App() {
  return (
    <>
      {/* nav shows on every page */}
      <Nav />
      <Routes>
        {/* home page route */}
        <Route path="/" element={<Main />} />
        {/* list of currencies */}
        <Route path="/currencies" element={<Currencies />} />
        {/* price page with symbol param */}
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </>
  )
}

export default App
