import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Cart = () => {

  const [CartItems, setCartItems] = useState([])
  const navigate = useNavigate()



  useEffect(() => {
    setCartItems((JSON.parse(localStorage.getItem('items'))))

  }, [])

  console.log(CartItems)

  const removeItem = (item) => {
    axios.delete(`https://fakestoreapi.com/products/${item}`)
    .then(res => {
      CartItems.filter(e => e.id != item)
      localStorage.setItem('items', JSON.stringify(CartItems.filter(e => e.id != item)))

      setCartItems((JSON.parse(localStorage.getItem('items'))))
      // localStorage.removeItem('items')
    }).catch(err => console.log(err))
  }

  const Clicked = (id) => {
    navigate(`/singlecomponent/${id}`)
}



  return (
    <>
      <div className='grid xl:grid-cols-2  gap-12 '>
        {
          CartItems ? (
            CartItems.map(e => (
              <div key={e.id} className="flex flex-col items-center m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img onClick={() => Clicked(e.id)} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={e.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 onClick={() => Clicked(e.id)} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
                  <p onClick={() => Clicked(e.id)} className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${e.price}</span>
                    <button onClick={() => removeItem(e.id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove from Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )
        }
      </div>

    </>
  )
}

export default Cart
