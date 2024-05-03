import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import Offers from './Pages/Offers'

// import { Nav } from './offers/Nav'
// import { Footer } from './offers/Footer'

export const App = () => {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='offers' element={<Offers />} />
        <Route path='offers/:id' element={<Offers />} />
        <Route path='order' element={<Order />} />
        <Route path='menu' element={<Menu />} />
        <Route path='career' element={<Career />} />

        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
