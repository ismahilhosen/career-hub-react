import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home/Home';
import ErrorPage from './ErrorPage';
import JonDetails from './Componets/JobDetails/JonDetails';
import Applied from './Componets/Applied/Applied';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'job/:id',
        element:<JonDetails></JonDetails>,
        loader: ()=> fetch("../public/data/jobs.json")
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader: ()=> fetch("../public/data/jobs.json")
      }
    ] 
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
  </HelmetProvider>
    
  </React.StrictMode>,
)
