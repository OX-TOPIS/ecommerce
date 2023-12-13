import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SingleProduct from './pages/home/SingleProduct.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/shop/:id",
    element: <SingleProduct/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
