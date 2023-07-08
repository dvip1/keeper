import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/routes/home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
      </Routes>
    </BrowserRouter >

  )
}
export default App
