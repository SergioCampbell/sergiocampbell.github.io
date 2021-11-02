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
        <h2 className="display-3 mb-5">Servicios</h2>
        <Services/>
        </section>
        </>
    )
}

export default Home