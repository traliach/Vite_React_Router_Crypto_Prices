import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'

function App() {
  return (
    <>
      <Nav />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/currencies" element={<Currencies />} />
      <Route path="/price/:symbol" element={<Price />} />
    </Routes>
    </>
  )
}

export default App
