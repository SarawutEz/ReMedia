import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Link } from "react-router-dom"
import Giscus from '@giscus/react';

function Discussions_M() {
  return (
    <>
      <title>Discussions Movie</title>
      <Nav />

      <div className='mx-8 mt-36'>
        <Giscus
          id="comments"
          repo="SarawutEz/ReMedia"
          repoId="R_kgDOLkVEiw"
          category="General"
          categoryId="DIC_kwDOLkVEi84CeZGQ"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="anonymous"
        />
      </div>
      <Footer />
    </>
  )
}

export default Discussions_M