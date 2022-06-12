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
import SignUp from './components/SignUp'
import Home from "./components/Home"

function App() {

  const {user} = useSelector((state: stateType) => state.logged)

  //const logged = false;
  console.log(user)

  return (
    <div className="App">      
      <BrowserRouter>
      <Navbar logged = {user}/>
        {user && 
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='providers' element={<ProviderList/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='bills' element={<BillList/>}/>
      </Routes>
        }
        {!user &&
        <Routes>
        <Route path='welcome' element={<Welcome/>}/>
        <Route path='login' element={<LogIn/>}/>
        <Route path='signin' element={<SignUp/>}/>
      </Routes>
        }
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
