import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'


function App() {
const router = createBrowserRouter([
  {
    path: "" ,
    element: <Layout/>,
    children:[
      {
      path: "Home" ,
    element:  <Home /> ,
      },

      {
           path: "About" ,
        element: <About/>,
      },

      {
           path: "Portfolio" ,
    element:<Portfolio/> ,
      },
      {
        path: "Contact" , 
        element: <Contact />
      },
    ]
  }






])

  return (
    <>
 <RouterProvider router={router} />



    </>
  )
}

export default App
