import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import SingleComponent from './Components/SingleComponent'

function App() {



  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/:Id' element={<Cart />} />
        <Route path='/singlecomponent/:Id' element = {<SingleComponent/>} />
      </Routes>
      {/* <Shop /> */}
      </BrowserRouter>
      
    </>
  )
}

export default App
