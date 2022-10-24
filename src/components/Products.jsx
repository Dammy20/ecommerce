import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { Link } from 'react-router-dom'

import { ThemeContext } from '../themecontext/Themeprovider'
import { useContext } from 'react'

const Products = () => {
  const { cart, setCart } = useContext(ThemeContext)
    
    const [filter, setFilter] = useState([])
    const [data, setData] = useState([])
    let ismounted = false

    useEffect(() => {
        const getProduct = async () => {
            try {
            // setLoading(true);
            const response = await axios.get("/data.json");
          
              setData(response.data)
              setFilter(response.data)
            
            console.log(response.data)
            } catch (error) {
              console.log(error)
            }

        }
      getProduct()
      if (!ismounted) {
        getProduct()
        // setLoading(false)
      }
      
       
      
      return () => {
        ismounted = true
      }
      
    }, [])
  const addItem = (index) => {
    cart.push(data[index])
    setCart([...cart])
    console.log(data[index])
  }



  const filterProduct = (cat) => {
    const updated = data.filter((x) => x.category === cat)
    console.log(updated)
    setFilter(updated)

  }
  return(
   
       <>
       
    <div>
      <div className='container my-1 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
          </div>
          
        </div>
        <div className='row justify content-center'>
        {/* {loading } */}
        </div>
      </div>
        </div>
    
   <div className='button d-flex justify-content-center  mb-3 pb-2'>
     <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
     <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's clothing</button>
     <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's clothing</button>
     <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
     <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronic</button>
  </div>
      <div className='w-100 d-flex flex-wrap gap-5 p-5'>
        {filter.map((item) => 
        <div key={item.id} className="card mb-4 " style={{width: "15rem", }}>
            <img className="card-img-top w-100 h-100" src={item.image} alt={item.title } />
  <div className="card-body">
              <h5 className="card-title">{item.title.substring(0,12) }</h5>
              <p className="card-text">{item.price }</p>
   <Link to={`/display/${item.id}`}><span className="btn btn-danger">Buy now</span></Link>
  </div>
</div>
          
           
        )}
</div>
        </>

  )
}

export default Products
