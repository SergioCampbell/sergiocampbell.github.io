import React from 'react'
import bg from '../assets/banner.mp4'
import './component.css'

function Banner(params) {
   
    return(
        <section className="banner">
        <video autoPlay muted loop>
            <source  src={bg} type="video/mp4"></source>
        </video>
        <div className="video-container">
                <h1 className="display-1 text-shadow">¡Bienvenido!</h1>
                <h2 className="display-2 text-shadow">web personal de SACV</h2>
                <br/><hr/><br/>
                <p className="txt-rotate text-light text-shadow" data-period="2000"
                 data-rotate='[ "Desarrollador freelance", "de aplicaciones web y móviles", "Lider documentador", "de telecomunicaciones", "Gracias por estar aquí."]'>                     
                 </p>
            </div>
        </section>
    )
}

export default Banner