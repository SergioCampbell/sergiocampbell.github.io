import React from 'react'
import Banner from '../component/banner'

import './pages.css'
import Services from '../component/services'
import Strategy from '../component/strategy'
import MiniBio from '../component/mini-bio'
import Wais from '../component/wais'
import MiniWork from '../component/miniwork'

function Home() {
    return(
        <>
        <Banner/>

        <section className="container">
        <h2 className="display-6 mb-5">Servicios</h2>
        <Services/>
        </section>

        <section className="container-fluid">
        <h3 className="display-6">Sobre mi</h3>
        <MiniBio/>
        </section>

        <section className="container-fluid">
        <Strategy/>
        </section>

        <section className="container-fluid mt-3  bg-prog">
        <h3 className="display-6 mb-3 mt-3">Programación y Telecomunicaciones</h3>
        <Wais/>
        </section>

        <section className="container">
        <h3 className="display-6 mb-3 mt-3">Proyectos</h3>
            <MiniWork />

        </section>

            <div className="bg-gradient-linkedin text-light row mt-5">
                <h4 className="col mt-4">Puedes ver mi currículum en linkedin</h4>
                <a href="https://linkedin.com/in/iamsergiocampbell" 
                target="_blank" className="btn btn-content col" rel="noreferrer">Ver currículum</a>
            </div>

        </>
    )
}

export default Home