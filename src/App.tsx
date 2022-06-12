import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { stateType } from './state/store'
import ProviderList from './components/ProviderList'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import BillList from './components/BillList'
import Welcome from './components/Welcome'
import LogIn from './components/LogIn'

function App() {

  const {user} = useSelector((state: stateType) => state.logged)

  const logged = false;

  return (
    <div className="App">      
      <BrowserRouter>
      <Navbar logged = {logged}/>
        {logged && 
      <Routes>
        <Route path='providers' element={<ProviderList/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='bills' element={<BillList/>}/>
      </Routes>
        }
        {!logged &&
        <Routes>
        <Route path='welcome' element={<Welcome/>}/>
        <Route path='login' element={<LogIn/>}/>
      </Routes>
        }
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
