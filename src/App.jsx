import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Home from './components/Home'
import Products from './components/Products'
import Default from './layout/Default'




function App() {
 

  return (
    
    <Default>
      <Home />,
    <Products/>
    </Default>
     
  
    
    
   
    
  )
}

export default App
