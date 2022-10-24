
import { useEffect, useState } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext(null)
export {ThemeContext} 
const Themeprovider = ({ children }) => {
    const [data, setData]= useState([])
  const [cart, setCart] = useState([])
  let ismounted = false;
  
  useEffect(() => {
    const getItemsFromLS = () => {
      let g = JSON.parse(localStorage.getItem("cart"));
      // cart.concat(g)
      if(g != null) setCart([...g])
    }

    if (!ismounted && cart.length <= 0) getItemsFromLS()
    
    return () => {
      ismounted = true
    }
  }, [])
  return (
      <ThemeContext.Provider value={{cart, setCart, data, setData}}>
          {children}
    </ThemeContext.Provider>
  )
}

export default Themeprovider
