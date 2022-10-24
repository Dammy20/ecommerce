import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../themecontext/Themeprovider'
import { useContext } from 'react'
import Home from './Home'

const Navbar = () => {
  const { cart } = useContext(ThemeContext)
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm" >
  <div className="container">
  <Link to={"/"}> <span className=" display navbar-brand fw-bold fs-4 " >LA FASHIONELLE</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <Link to={"#"} className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/products"}><span className="nav-link mx-4 text-decoration:none" >Products</span></Link>
        </li>
        
            </ul>
            <div className='button'>
            <span  className="btn btn-outline-dark">Login
             <i className="fa fa-sign-in me-1"></i>       
             </span>
            </div>
            <div className='button'>
           <Link to={"/card"}> <span  className="btn btn-outline-dark"> Cart {cart.length}</span></Link> 
         
                         
            
            </div>
      
    </div>
  </div>
</nav>
    </div>
   
  )
}

export default Navbar
