import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import OwnerSignup from './components/OwnerSignup.jsx'
import Layout from './Layout/Layout.jsx'
import Login from './childcomponent/Login.jsx'
import Roompage from './components/Roompage.jsx'
import RoomDetails from './childcomponent/RoomDetails.jsx'
import Signup from './childcomponent/Signup.jsx'
import Bookings from './childcomponent/Bookings.jsx'
import MyRoom from './childcomponent/MyRoom.jsx'
const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
         path: "/", 
         element: <Home />
      },
      {
        path:'/signup',
        element:<Signup />
      },{
        path:'/ownersignup',
        element:<OwnerSignup/>
      },{
        path:'/ownersignup',
        element:<OwnerSignup />
      },
      {
        path:'/login',
        element:<Login />
      },{
        path:'/home',
        element:<Roompage />
      },{
        path:'/room/:id',
        element:<RoomDetails />
      },{
        path:'/bookings',
        element:<Bookings />
      },{
        path:'/yourroom/:id',
        element:<MyRoom />
      }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<NextUIProvider>
      <RouterProvider router={router}/>
    </NextUIProvider>
  </React.StrictMode>,
)
