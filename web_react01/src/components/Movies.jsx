import Nav from './nav'
import Footer from './footer'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



export default function Movies() {

  const [data, setDate] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDIzMjllY2M4ODk5YzQ4OWVmNTM1MTIxMWNhZThlNSIsInN1YiI6IjY2MDM3N2U4ZGJmMTQ0MDE3ZDAzMTczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hR1xJERwjQjV_NoY5SNxTL0ZrKJ3_e1ceEEQLcohr5Q'
      }
    });
    setDate(response.data);
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  console.log(data);

  return (
    <>
      <title>Movies</title>
      <Nav />


      <Footer />






    </>
  )
}