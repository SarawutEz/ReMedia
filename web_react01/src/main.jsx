import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx'
import Movies_Popular from './components/Movies_Popular.jsx'
import Search from './components/Search.jsx'
import Movie_top from './components/Movie_top.jsx';
import TV_Popular from './components/TV_Popular .jsx';
import TV_top from './components/TV_top.jsx';
import TV_Trending from './components/TV_Trending.jsx';
import Movie_Trending from './components/Movie_Trending.jsx';
import Discussions_M from './components/Discussions_M.jsx';
import Discussions_T from './components/Discussions_T.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "Movies_Popular",
    element: <Movies_Popular />
  },

  {
    path: "Search",
    element: <Search />
  },

  {
    path: "Movies_top",
    element: <Movie_top />
  },

  {
    path: "TV_Popular",
    element: <TV_Popular />
  },

  {
    path: "TV_top",
    element: <TV_top />
  },

  {
    path: "TV_Trending",
    element: <TV_Trending />
  },

  {
    path: "Discussions_M",
    element: <Discussions_M />
  },

  {
    path: "Discussions_T",
    element: <Discussions_T />
  },

  {
    path: "Movies_Trending",
    element: <Movie_Trending />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
