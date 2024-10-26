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
import { Calendario } from './pages/calendario/index.jsx'
import { VideoPage } from './pages/VideoCallPage/principal.jsx';
import { Informations_psi } from './pages/informations/informations.psi/index.jsx';


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
        path: '/home/paciente',
        element: <Dashboard />
      },
      {
        path: '/home/psicologo',
        element: <Dashboard_psi />

      },
      {
        path: '/registro/paciente',
        element: <Registration_pc />
      },
      {
        path: '/registro/psicologo',
        element: <Registration_psi />
      },
      {
        path: 'login/paciente',
        element: <Login_pc />
      },
      {
        path: '/login/psicologo',
        element: <Login_psi />
      },
      {
        path: '/psicologos',
        element: <Search />
      },
      {
        path: '/info/paciente',
        element: <Informations_pc />
      },
      {
        path: '/consulta',
        element: <Calendario />
      },
      {
        path: '/chat',
        element: <VideoPage/>
      },
      {
        path: '/info/psicologo',
        element: <Informations_psi/>
      }
    ]
  },
]);
