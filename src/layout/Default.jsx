import React from 'react'
import Navbar from '../components/Navbar'

const Default = ({children}) => {
  return (
    <main>
      <Navbar/>
      <div>
      {children}
      </div>
    </main>
    
  )
}

export default Default
