import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NoteBuddy from './pages/NoteBuddy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="notebuddy" element={<NoteBuddy />} />
      </Route>
    </Routes>
  )
}

export default App
