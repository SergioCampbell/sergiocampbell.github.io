import React from 'react'
import Shape from '../component/shape'
import Banner from '../component/banner'

import './pages.css'
import Services from '../component/services'

function Home(porps) {
    return(
        <>
        <Banner/>
        <section className="container">
        <Services/>
        </section>
        </>
    )
}

export default Home