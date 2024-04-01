import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


//components
import Nav from './nav'
import Footer from './footer'

export default function Search() {

  const [data, setDate] = useState([])
  const [loading, setloading] = useState(false)
  const [Search, setSearch] = useState("")
  console.log(Search);

  const fetchAPI = async () => {

    try {
      setloading(true);
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${Search}`, {
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
  }, [Search])

  console.log(data);

  return (
    <>
      <title>Search</title>
      <Nav />

      <label className="input input-bordered flex items-center gap-2 mt-28 w-6/12 container mx-auto animate-fade-right">

        <input type="text" className="grow text-lg" placeholder="Search" value={Search} onChange={(e) => setSearch(e.target.value)} />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-100"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>

      {loading ? <div className='container mx-auto flex justify-center mt-32'><span className="loading loading-ring loading-lg"></span></div> : <div>

        <div className='flex flex-wrap justify-center'>
          {data.map((val) => (
            <div className='mt-20' key={val.id}>
              <div className='mx-16 w-72 min-h-full skeleton '>

                <div className="absolute  z-10 dropdown dropdown-bottom animate-fade-right">
                  <div tabIndex={0} role="button" className="btn m-1 opacity-50 hover:opacity-100"><img src="/img/book.png" /></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80">
                    <p className='text-lg z-15'>{val.overview}</p>
                    <details className="dropdown">
                      <summary className="m-1 btn btn-active btn-link bg-transparent border-none animate-spin"><img src="/img/time.png" /></summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <p className='text-lg z-15'>{val.release_date}</p>
                        <p className='text-lg z-15'>{val.first_air_date}</p>
                      </ul>
                    </details>
                  </ul>
                </div>

                <div className="absolute dropdown dropdown-end ml-56 z-10">
                  <div tabIndex={0} role="button" className="btn m-1 opacity-50 hover:opacity-100"><img src="/img/add-image.png" /></div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <img className='card size-11/12 animate-fade-left hover:scale-110' src={`https://image.tmdb.org/t/p/w500${val.backdrop_path}`} />
                  </ul>
                </div>

                <img className='card size-11/12 animate-fade-left hover:scale-110' src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} />


                <div className="stats shadow pt-1 bg-transparent">

                  <div className="stat mt-3">
                    <p className='text-xl font-semibold'>{val.name}</p>
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
