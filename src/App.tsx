import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { stateType } from './state/store'
import Providers from './components/Providers'
import Products from './components/Products'

function App() {

  const {user} = useSelector((state: stateType) => state.logged)

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar logged = {true}/>
      <Routes>
        <Route path='providers' element={<Providers/>}/>
        <Route path='products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
