import { createBrowserRouter, Outlet } from 'react-router-dom';

import { Home } from './pages/home';
import { About } from './pages/about';
import  { Dashboard } from './pages/Dashboard/principal'
import { Consultas } from "./pages/Dashboard/sections/Consultas.jsx";
import { Registration_pc } from './pages/registration/registration.pc/index.jsx';
import { Registration_psi } from './pages/registration/registration.psi/index.jsx'
import { Login_pc } from "./pages/Logins/Login.pc/Index.jsx";
import { Login_psi } from "./pages/Logins/Login.psi/index.jsx";
import { Search } from "./pages/search/index.jsx";
import { Informations_pc } from './pages/informations/infomations.pc/index.jsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <About />
      },{
        path:'/homepage',
        element: <Dashboard/>
      },
      {
        path: '/registro_pc',
        element: <Registration_pc />
      },
      {
        path: '/registro_psi',
        element: <Registration_psi />
      },
      {
        path: '/login_pc',
        element: <Login_pc />
      },
      {
        path: '/login_psi',
        element: <Login_psi />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/consulta_pc',
        element: <Consultas />
      },
      {
        path: '/info_pc',
        element: <Informations_pc />
      }


    ]
  },
])