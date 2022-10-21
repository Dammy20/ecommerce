import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
 import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Display from './components/Display';
import Products from './components/Products';
import Card from './components/Card';

import Navbar from './components/Navbar';
import Themeprovider from './themecontext/Themeprovider';




const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/display/:id", element: <Display /> },
  { path: "/card", element: <Card /> },

{path:"/products", element:<Products/>},
{path:"/card", element:<Card/>},
{path:"/Navbar", element:<Navbar/>},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themeprovider>
      <RouterProvider router={router} />
      </Themeprovider>
  </React.StrictMode>
)
