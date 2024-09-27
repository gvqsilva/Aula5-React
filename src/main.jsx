import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import CadUsuarios from './routes/CadUsuarios.jsx'
import ListarUsuarios from './routes/ListarUsuarios.jsx'

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
      {path:'/dashboard', element:<Dashboard/>},
      {path:'/cadUsuarios', element:<CadUsuarios/>},
      {path:'/listarUsuarios', element:<ListarUsuarios/>},

      //editarUsuario NÃO PODE ESQUECER DO :id ( PARA EDITAR E EXCLUIR)
      {path:'/editarUsuarios/:id', element:<CadUsuarios/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
