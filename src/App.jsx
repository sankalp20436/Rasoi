import React, { useState } from 'react'
import Navbar from '../src/components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'


const App = () => {
  const [showLogin,SetshowLogin] = useState(false)
  return (
    <>
    {showLogin ? <Login SetshowLogin={SetshowLogin} />:<></>}
      <div className="App">
        <Navbar SetshowLogin={SetshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/placeorder' element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
