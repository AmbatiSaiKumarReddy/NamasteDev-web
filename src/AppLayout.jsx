
import Navbar from "./components/Navbar"
import { Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import Login from "./components/Login"
import Profile from "./components/Profile"

const root=createRoot(document.getElementById('root'))


const  AppLayout=()=> {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet/>
      </div>
   
    </>
       
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },{
        path:"/profile",
        element:<Profile/>
      }

    ]

  }
  
])


root.render(<RouterProvider router={appRouter}/>)

export default AppLayout
