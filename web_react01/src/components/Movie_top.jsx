import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


//components
import Nav from './nav'
import Footer from './footer'
import Scrolltotop from './Scrolltotop'

function Movie_top() {

  const [data, setDate] = useState([])
  const [loading, setloading] = useState(false)

  const fetchAPI = async () => {

    try {
      setloading(true);
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, {
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
      <title>Top Movies</title>
      <Scrolltotop />
      <Nav />

      <p className='mt-28 mb-20 text-4xl font-bold text-center underline decoration-solid animate-fade-right'>
        Top Movies</p>

      {loading ? <div className='container mx-auto flex justify-center'><span className="loading loading-ring loading-lg"></span></div> : <div>

        <div className='flex flex-wrap justify-center'>
          {data.map((val) => (
            <div className='mb-48' key={val.id}>
              <div className='w-72 min-h-full skeleton mx-2 sm:w-72 sm:mx-6 lg:mx-8'>

                <div className='absolute z-20'>
                  <dialog id={val.id} className="modal">
                    <div className="modal-box bg-gradient-to-r from-base-100 to-base-300 w-11/12 max-w-5xl">
                      <h3 className="font-bold text-2xl">Overview</h3>
                      <p className="py-4">{val.overview}</p>

                      <samp>
                        <p className='text-lg z-15'>Release Date: {val.release_date}</p>
                      </samp>

                      <Link to={`https://www.google.com/search?q=${val.title}`}><button className="btn btn-active btn-link bg-transparent border-none"><img src="/img/analysis.png" /></button></Link>
                      
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

export default Movie_top