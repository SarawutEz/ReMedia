import React from 'react'
import Nav from './nav'
import Footer from './footer'

function Home() {

  return (
    <>
      <title>ReMedia</title>

      {/*Navbar*/}
      <Nav />

      {/*animation by TAILWIND CSS ANIMATED*/}
      <div className='animate-fade-up animate-ease-in-out animate-delay-300'>

        {/*Content 1*/}
        <div className='flex justify-between w-11/12 mx-auto mt-40 animate-fade-right  animate-delay-1000 animate-ease-in-out'>
          <div className='flex-row mr-12'>
            <p className='text-6xl font-extrabold '>Movie</p>
            <p className='mt-6 text-lg '>Movies is a form of visual art that uses images to tell a story or convey an idea Can be divided into many types.</p>
            <button className="btn btn-outline mt-8">Review</button>
          </div>
          <img className='card size-6/12 skew-y-6 select-none' src="/img/avengersendgame_lob_mas_dsk_01.jpg" />
        </div>

        {/*Content 2*/}
        <div className='flex justify-between w-11/12 mx-auto mt-60 animate-fade-left animate-delay-1000 animate-ease-in-out'>
          <img className='card size-6/12 skew-y-6 select-none' src="/img/yourname.png" />
          <div className='flex-row ml-12'>
            <p className='text-6xl font-extrabold'>Animation</p>
            <p className='mt-6 text-lg'>Animation is the creation of moving images by projecting several still images consecutively at high speed by arranging them together.</p>
            <button className="btn btn-outline mt-8">Review</button>
          </div>
        </div>

        {/*Content 3*/}
        <div className='flex justify-between w-11/12 mx-auto mt-60 animate-fade-right  animate-delay-1000 animate-ease-in-out'>
          <div className='flex-row mr-12'>
            <p className='text-6xl font-extrabold'>Games</p>
            <p className='mt-6 text-lg'>Video games are electronic games that involve interaction with a user interface to generate feedback via a video display device.</p>
            <button className="btn btn-outline mt-8">Review</button>
          </div>
          <img className='card size-6/12 skew-y-6 select-none' src="/img/spider_man.webp" />
        </div>

      </div>
      

      {/*Footer*/}
      <Footer />
    </>
  )
}

export default Home