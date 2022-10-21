
import { useState } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext(null)
export {ThemeContext} 
const Themeprovider = ({ children }) => {
    const [data, setData]= useState([])
    const [cart, setCart]= useState([])
  return (
      <ThemeContext.Provider value={{cart, setCart, data, setData}}>
          {children}
    </ThemeContext.Provider>
  )
}

export default Themeprovider
