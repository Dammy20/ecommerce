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
  <Link to={"/"}> <a className=" display navbar-brand fw-bold fs-4 " href="#">LA FASHIONELLE</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to={"/products"}><a className="nav-link mx-4 text-decoration:none" href="#">Products</a></Link>
        </li>
        
            </ul>
            <div className='button'>
            <a href="" className="btn btn-outline-dark">Login
             <i className="fa fa-sign-in me-1"></i>       
             </a>
            </div>
            <div className='button'>
           <Link to={"/card"}> <a href="" className="btn btn-outline-dark"> Cart  {cart.length}</a></Link> 
         
                         
            
            </div>
      
    </div>
  </div>
</nav>
    </div>
   
  )
}

export default Navbar
