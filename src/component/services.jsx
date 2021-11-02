import React from 'react'

export default function Services(props){
    
    return(
        <>
        <h2 className="display-3">Servicios y proyectos</h2>

        <section className="container services mb-5">
            <div className="row row-cols-1 row-cols-md-5 g-5">

                <div className="ability col bg-dark-gradnt-card text-light card-body">
                <i class="fas fa-laptop-code fa-lg"></i>
                    <h4 className="card-title">Desarrollos Front-end</h4>
                    <p className="card-text">Me gusta hacer esa cosa que está ronda en tu cabeza todos los días y
                     darle vida en el navegador o en tu teléfono inteligente.</p>
                </div>

                <div className="ability col bg-dark-gradnt-card text-light card-body">
                <i class="fas fa-chart-line fa-lg"></i>
                    <h4 className="card-title">Posicionamiento web con SEO/SEM</h4>
                    <p className="card-text">Cada página tiene su propia palabra clave que la hace especial y 
                    localizable entre otros sitios web. Juntos podemos encontrar las soluciones para crecer y posicionar su marca.</p>
                </div>

                <div className="ability col bg-dark-gradnt-card text-light card-body">
                <i class="fas fa-hands-helping fa-lg"></i>
                    <h4 className="card-title">Asesoría</h4>
                    <p className="card-text">Me complace ayudarlo a hacer crecer esa campaña para mostrar a sus clientes quién es usted y qué quieren.</p>
                </div>

                <div className="ability col bg-dark-gradnt-card text-light card-body">
                <i class="fas fa-code fa-lg"></i>
                    <h4 className="card-title">Programación de aplicaciones híbridas</h4>
                    <p className="card-text">Desde una aplicacion web hasta una app movil mezclo las habilidades de los frameworks web hasta el Desarrollos
                    para dispositivos móviles y llevar tu app donde quieras. (sugeto a restricciones)</p>
                </div>

            </div>
        </section>
        
        </>
    )
}