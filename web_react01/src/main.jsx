import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import Animations from './components/Animations.jsx'
import Game from './components/Game.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "Movies",
    element: <Movies />
  },

  {
    path: "Animations",
    element: <Animations />
  },

  {
    path: "Game",
    element: <Game />
  },

  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
