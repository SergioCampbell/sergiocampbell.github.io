import React from 'react'
import Services from '../component/services'
import Works from '../component/works'

function Portfolio() {
    return(
        <>
         <section>
        <div className="bg-gradient-services"><br/>
        <div className="mt-5"><br/>
            <h2 className="display-6 text-shadow">PARA MI ES UN GUSTO COLABORAR EN TU PROYECTO.</h2>
        </div>
        </div>
        </section><br/>

        <h2 className="display-3 mb-5">Servicios y proyectos</h2>

        <Services/>

         <hr/>

        <Works />

        </>
    )
}

export default Portfolio