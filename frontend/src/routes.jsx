import { createBrowserRouter, Outlet } from 'react-router-dom';


import { Home } from './pages/home';
import { About } from './pages/about';
import { Dashboard_psi } from './pages/Dashboard_psi/principal.jsx';
import { Dashboard } from './pages/Dashboard_pc/principal.jsx';
import { Registration_pc } from './pages/registration/registration.pc/index.jsx';
import { Registration_psi } from './pages/registration/registration.psi/index.jsx';
import { Login_pc } from "./pages/Logins/Login.pc/Index.jsx";
import { Login_psi } from "./pages/Logins/Login.psi/index.jsx";
import { Search } from "./pages/search/index.jsx";
import { Informations_pc } from './pages/informations/infomations.pc/index.jsx';
import { Calendario } from './pages/search/calendario/index.jsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element:  <Outlet />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <About />
      },
      {
        path: '/homepage-pc',
        element: <Dashboard />
      },
      {
        path: '/homepage-psi',
        element: <Dashboard_psi />

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
        path: '/info_pc',
        element: <Informations_pc />
      },
      {
        path: '/calendario',
        element: <Calendario />
      }
    ]
  },
]);
