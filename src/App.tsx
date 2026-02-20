import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Success from './pages/Success'

import Header from './components/Header'
import Footer from './components/Footer'
import StarBackground from './components/StarBackground'
import './css/App.css'

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
