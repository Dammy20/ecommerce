import React, { useEffect } from 'react'
import  { ThemeContext } from '../themecontext/Themeprovider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Default from '../layout/Default'


const Card = () => {
  
    const { cart, setCart } = useContext(ThemeContext)
  const remove = (index) => {
    cart.splice(index, 1)
    setCart([...cart])
    localStorage.setItem("cart", JSON.stringify([...cart]))
  }
  
let updated = JSON.parse(localStorage.getItem("cart"))
  
  return (
  <div><nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand text-uppercase lead fw-bold">Card page</a>
  <Link to={"/products"}><a class="navbar-brand text-uppercase lead fw-bold">Back</a></Link>
  <form class="form-inline">
     </form>
</nav>
      {updated.map((items, index) =>
        
          <main className='d-flexxx shadow'>
        <div className='col-md-3 mt-5'>
        <img src={items.image} alt={items.title} height="60px" width="60px" />
        
        </div>
        <div className='col-md-6 pt-4'>
          <h4 className=' div2 text-uppercase text-black-10'>{items.category }</h4>
          <h1 className=' div4 '>{items.title}</h1>
            <div className='div-btn'>
               <h3 className='div6  my-2'>${items.price}</h3>
              <button onClick={()=>remove(index)} className=' div7  btn btn-outline-danger  ' >Remove from cart</button>
        
          </div>
             </div>
      </main>
      
  
      
      )}
    </div>
  )
}

export default Card
