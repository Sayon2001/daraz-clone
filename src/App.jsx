import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleProduct from './components/SingleProduct'

function App() {

  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    )
  }

  const router = new createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{
        path: '/',
        element: <Home />
      }, {
        path: '/singleProduct/:id',
        element: <SingleProduct />
      }]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
