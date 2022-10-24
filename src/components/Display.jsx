import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Default from '../layout/Default'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../themecontext/Themeprovider'
import { useContext } from 'react'



const Display = () => {
  const [data, setData] = useState(ThemeContext)
  const { cart, setCart } = useContext(ThemeContext)
  let { id } = useParams()
  const [users, setUsers] = useState({})
  let answer = false

  useEffect(() => {
    const Posts = async () => {
      try {
        const response = await axios.get("/data.json");
        
        const [single] = response.data.filter(f => f.id == id);
        setUsers(single)
      } catch (error) {
        console.log(error);
      }
    }
    if (!answer) Posts()
    return () => {
      answer = true
    }
  }, [])

  const handleCart = () => {
    cart.push(users)
    setCart([...cart])
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify([...cart]))
   
    
 }

  return (
    <Default>
      <main className='d-flex'>
        <div className='col-md-6'>
        <img src={users.image} alt={users.title} height="400px" width="400px" />
        
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{users.category }</h4>
          <h1 className='display-5'>{users.title}</h1>
          <p className='lead fw-bolder'>Rating {users.rating && users.rating.rate}  <i className="fa fa-star"></i></p>
          <h3 className='display-6 fw-bold my-4'>${users.price }</h3>
          <p className='lead'>{users.description }</p>
         <button className='btn btn-outline-dark px-4 py-2' onClick={()=>handleCart(id)}>Add to cart</button>
         </div>
      </main>
          
    </Default>
  )
}

export default Display
