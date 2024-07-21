import './App.scss';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Admin from './Components/Dashboard/Admin';
import Artistid from './Components/Dashboard/artistid';
import Home from './Components/Dashboard/Home';
import Song from './Components/Dashboard/song';
import Read from './Components/Dashboard/read';
import Update from './Components/Dashboard/update';
import Album from './Components/Dashboard/album';


import {
  createBrowserRouter,
  RouterProvider
 }from 'react-router-dom'

const router= createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/Register',
    element: <div><Register /></div>
  },
  {
    path: '/Dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/Admin',
    element: <div><Admin /></div>
  },
  {
    path: '/Artistid',
    element: <div><Artistid /></div>
  },
  {
    path: '/Home',
    element: <div><Home /></div>
  },
  {
    path: '/Song',
    element: <div><Song /></div>
  },
  {
    path: '/Read/:id',
    element: <div><Read /></div>
  },
  {
    path: '/Update/:id',
    element: <div><Update /></div>
  },
  {
    path: '/Album',
    element: <div><Album /></div>
  },
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
      
    
    </div>
  )

}
export default App
