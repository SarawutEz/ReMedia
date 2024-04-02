import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Link } from "react-router-dom"

function Home() {

  return (
    <>
      <title>ReMedia</title>

      {/*Navbar*/}
      <Nav />

      {/*animation by TAILWIND CSS ANIMATED*/}


      {/*Content 1*/}
      <div className='container mx-auto flex w-11/12 mx-auto mt-52 animate-fade-right animate-ease-in-out max-md:flex-col mt-48'>
        <div className='mr-12 max-md:mr-0'>
          <p className='text-6xl font-extrabold underline max-md:text-5xl'>Movie</p>
          <p className='mt-6 text-lg '>Movies is a form of visual art that uses images to tell a story or convey an idea Can be divided into many types.</p>
          <button className="btn btn-outline mt-8"><Link to="/Movies_Trending">Movies</Link></button>
        </div>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0 max-md:mt-16 max-md:w-96 max-md:container mx-auto' src="/img/avengersendgame_lob_mas_dsk_01.jpg" />
      </div>

      {/*Content 2*/}
      <div className='container mx-auto flex w-11/12 mx-auto mt-60 animate-fade-left animate-ease-in-out max-md:flex-col mt-48'>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0 max-md:mt-16 max-md:hidden' src="/img/Hazbin Hotel.jpg" />
        <div className='ml-12 max-md:ml-0'>
          <p className='text-6xl font-extrabold underline max-md:text-5xl'>TV Shows</p>
          <p className='mt-6 text-lg'>This is the most general term and literally translates to "television program." It encompasses all types of content broadcasted on TV, including news, documentaries, game shows, and of course, fictional series.</p>
          <button className="btn btn-outline mt-8"><Link to="/TV_Trending">TV Shows</Link></button>
        </div>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0 md:hidden max-md:mt-16 max-md:w-96 max-md:container mx-auto' src="/img/Hazbin Hotel.jpg" />
      </div>

      {/*Content 3*/}
      <div className='container mx-auto flex w-11/12 mx-auto mt-60 animate-fade-right animate-ease-in-out max-md:flex-col mt-48'>
        <div className='mr-12 max-md:mr-0'>
          <p className='text-6xl font-extrabold underline max-md:text-5xl'>Search</p>
          <p className='mt-6 text-lg'>Use multi search when you want to search for movies, TV shows and people in a single request.</p>
          <button className="btn btn-outline mt-8"><Link to="/Search">Search</Link></button>
        </div>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0 max-md:mt-16 max-md:w-96 max-md:container mx-auto' src="/img/Search.png" />
      </div>
      

      {/*Footer*/}
      <Footer />
    </>
  )
}

export default Home