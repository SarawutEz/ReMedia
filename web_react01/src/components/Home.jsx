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
      <div className='flex justify-between w-11/12 mx-auto mt-40 animate-fade-right animate-ease-in-out'>
        <div className='flex-row mr-12'>
          <p className='text-6xl font-extrabold underline'>Movie</p>
          <p className='mt-6 text-lg '>Movies is a form of visual art that uses images to tell a story or convey an idea Can be divided into many types.</p>
          <button className="btn btn-outline mt-8"><Link to="/Movies">Movies</Link></button>
        </div>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0' src="/img/avengersendgame_lob_mas_dsk_01.jpg" />
      </div>

      {/*Content 2*/}
      <div className='flex justify-between w-11/12 mx-auto mt-60 animate-fade-left animate-ease-in-out'>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0' src="/img/yourname.png" />
        <div className='flex-row ml-12'>
          <p className='text-6xl font-extrabold underline'>Animation</p>
          <p className='mt-6 text-lg'>Animation is the creation of moving images by projecting several still images consecutively at high speed by arranging them together.</p>
          <button className="btn btn-outline mt-8"><Link to="/Animations">Animations</Link></button>
        </div>
      </div>

      {/*Content 3*/}
      <div className='flex justify-between w-11/12 mx-auto mt-60 animate-fade-right animate-ease-in-out'>
        <div className='flex-row mr-12'>
          <p className='text-6xl font-extrabold underline'>Games</p>
          <p className='mt-6 text-lg'>Video games are electronic games that involve interaction with a user interface to generate feedback via a video display device.</p>
          <button className="btn btn-outline mt-8"><Link to="/Game">Game</Link></button>
        </div>
        <img className='card size-6/12 skew-y-6 select-none cursor-pointer hover:skew-y-0' src="/img/spider_man.webp" />
      </div>




      {/*Footer*/}
      <Footer />
    </>
  )
}

export default Home