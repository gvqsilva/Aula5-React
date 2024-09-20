import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'

//criando função
const router = createBrowserRouter([
  {
    //Elemento pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/dashboard', element:<Dashboard/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
