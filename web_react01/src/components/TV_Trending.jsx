import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


//components
import Nav from './nav'
import Footer from './footer'

function TV_Trending() {

    const [data, setDate] = useState([])
    const [loading, setloading] = useState(false)

    const fetchAPI = async () => {
        try {
            setloading(true);
            const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, {
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
            <title>Trending TV Shows</title>
            <Nav />

            <p className='mt-28 mb-20 text-4xl font-bold text-center underline decoration-solid animate-fade-right'>
                Trending TV Shows  </p>

            {loading ? <div className='container mx-auto flex justify-center'><span className="loading loading-ring loading-lg"></span></div> : <div>

                <div className='flex flex-wrap justify-center'>
                    {data.map((val) => (
                        <div className='mb-48' key={val.id}>
                            <div className='min-h-full skeleton mx-2 sm:w-72 sm:mx-6 lg:mx-8 '>

                                <div className="dropdown dropdown-bottom animate-fade-right z-20">
                                    <div tabIndex={0} role="button" className="btn m-1 opacity-50 hover:opacity-100"><img src="/img/book.png" /></div>
                                    <ul tabIndex={0} className=" dropdown-content p-2 shadow bg-base-100 rounded-box w-80">
                                        <p className='text-lg mr-4'>{val.overview}</p>
                                        <details className="dropdown">
                                            <summary className="m-1 btn btn-active btn-link bg-transparent border-none animate-spin"><img src="/img/time.png" /></summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                <p className='text-lg z-15'>{val.first_air_date}</p>
                                            </ul>
                                        </details>

                                    </ul>
                                </div>

                                <div className="absolute dropdown dropdown-center z-10">
                                    <div tabIndex={0} role="button" className="btn m-1 opacity-50 hover:opacity-100"><img src="/img/add-image.png" /></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <img className='card size-11/12 animate-fade-left hover:scale-110' src={`https://image.tmdb.org/t/p/w500${val.backdrop_path}`} />
                                    </ul>
                                </div>

                                <img className='card size-11/12 animate-fade-left hover:scale-110' src={`https://image.tmdb.org/t/p/w500${val.poster_path}`} />


                                <div className="stats shadow pt-1 bg-transparent">

                                    <div className="stat">
                                        <p className='text-xl font-semibold'>{val.name}</p>
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

export default TV_Trending