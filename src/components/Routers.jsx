import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Layout from './Layout';
import Orders from '../pages/orders/Orders';

function Routers() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />, 
          children: [
            {
              path: "/",
              element: <Dashboard /> 
            },
            {
              path: "/orders",
              element: <Orders /> 
            },
          ],
        },
        {
          path: "/login",
          element: <Orders /> 
        },
      ]);


  return (
    <RouterProvider router={router} /> 
  )
}

export default Routers