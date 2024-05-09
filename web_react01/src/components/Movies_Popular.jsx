import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


//components
import Nav from './nav'
import Footer from './footer'
import Scrolltotop from './Scrolltotop'


export default function Movies_Popular() {

  const [data, setDate] = useState([])
  const [loading, setloading] = useState(false)

  const fetchAPI = async () => {
    try {
      setloading(true);
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIzMjllY2M4ODk5YzQ4OWVmNTM1MTIxMWNhZThlNSIsInN1YiI6IjY2MDM3N2U4ZGJmMTQ0MDE3ZDAzMTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hR1xJERwjQjV_NoY5SNxTL0ZrKJ3_e1ceEEQLcohr5Q'
        }
      });
      setDate(response.data.results);
    }

    catch (error) {
      console.error("Error", error);
    }

    finally {
      setloading(false);
    }

  }

  useEffect(() => {
    fetchAPI();
  }, [])

  console.log(data);

  return (
    <>
      <title>Popular Movies</title>
      <Scrolltotop />
      <Nav />

      <div className='flex justify-center '>
        <kbd className="kbd kbd-lg btn mt-28 mb-20 text-2xl font-bold">Popular Movies</kbd>
      </div>


      {loading ? <div className='container mx-auto flex justify-center'><span className="loading loading-ring loading-lg"></span></div> : <div>

        <div className='flex flex-wrap justify-center'>
          {data.map((val) => (
            <div className='mb-48' key={val.id}>
              <div className='w-72 min-h-full skeleton mx-2 sm:w-72 sm:mx-6 lg:mx-8 '>

                <div className='absolute z-20'>
                  <dialog id={val.id} className="modal">
                    <div className="modal-box bg-gradient-to-r from-base-100 to-base-300 w-11/12 max-w-5xl">

                      <div className="hero min-h-full rounded-xl bg-cover sm:bg-contain" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${val.backdrop_path})` }}>
                        <div className="hero-overlay bg-black opacity-60 rounded-xl"></div>
                        <div className="hero-content text-neutral-content">
                          <div>
                            <h1 className="mb-5 text-3xl font-medium">Overview</h1>
                            <p className="mb-4 ">{val.overview}</p>
                            <p className='mb-2 font-semibold'>Release Date: {val.release_date}</p>
                            <p className="mb-5 text-lg font-semibold">Vote Average: {val.vote_average}</p>
                            <Link to={`https://www.google.com/search?q=${val.title}`}><button className="btn"><img src="/img/analysis.png" /></button></Link>
                          </div>
                        </div>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <img className='size-full animate-fade-left mt-1 rounded-2xl cursor-pointer' onClick={() => document.getElementById(`${val.id}`).showModal()} src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} />


                <div className="stats shadow pt-1 bg-transparent">

                  <div className="stat">
                    <p className='text-xl font-semibold'>{val.title}</p>
                    <div className="stat-title">Vote Average</div>
                    <div className="stat-value text-lg">{val.vote_average}</div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>}
      <Footer />
    </>
  )
}