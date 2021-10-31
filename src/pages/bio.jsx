import React from 'react'
import './pages.css'
import Shape from '../component/shape'
import Shape2 from '../component/shape2'

import prog from '../assets/sergio2021.jpg'
import tel from '../assets/sergio2021-telec.jpg'

export default function Bio() {
    return(
        <section className="">
        <div className="bg-gradient-bio position-relative"><br/>
        <div className="position-absolute top-50 start-0 translate-middle-y mx-5">
        <p className=" text-shadow">Hola, mi nombre es:</p>
            <h2 className="display-2 text-shadow">Sergio Andres <br/>Campbell Villarreal</h2>
        <br/><hr/><br/>
        <p className=" text-shadow">Front-end developer | web | aplicaciones hibridas | Telecomunicaciones</p>
        </div>
        </div>
        
            <Shape/>

        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col">
                    <img src={prog} alt="logo sergio campbell dev" className="bio-photo shadow-lg mt-5"/>
                </div>
                <div className="col">
                    <h3>Programación</h3>
                    <p className="text-justify mt-3">
                        Desde el 2010 inicié el desarrollo de paginas web con HTML y CSS en parelelo con mis trabajos formales 
                        en compañías como tecnico de sistemas organizando las redes LAN y WLAN como el mantenimiento de equipos de
                        computo e impresoras. Avanzando los estudios en la universidad Politecnico de las Costa Atlántica; descubrí 
                        los lenguajes de programación:
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i class="fas fa-angle-right color-3"></i>C# (C Sharp)</li>
                            <li className="list-group-item"><i class="fas fa-angle-right color-3"></i>Python</li>
                            <li className="list-group-item"><i class="fas fa-angle-right color-3"></i>SQL</li>
                            <li className="list-group-item"><i class="fas fa-angle-right color-3"></i>JavaScript</li>
                        </ul> 
                        Con este último, a mediados de 2019 empezé a usar <a className="text-dark" href="https://angularjs.org" target="_blank" rel="no-refered">Angularjs</a> y &nbsp;
                        <a className="text-dark" href="https://reactjs.org" target="_blank" rel="no-refered">Reactjs</a> adaptando las actualizaciones
                        en cáda proyecto que realizo.
                     </p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <img src={tel} alt="logo sergio campbell dev" className="bio-photo shadow-lg mt-5"/>
                </div>
                <div className="col">
                    <h3>Telecomunicaciones</h3>
                    <p className="text-justify mt-3">
                        Una variante de mi carrera profesional dió inicio en esta área cunado acerqué a las telecomunicaciones; pues,
                        aquí como auxiliar técnico realizaba soporte en instalaciones y reparaciones de líneas telefónicas sobre cobre y
                        ADSL. Hubo un tiempo a mediados del 2018 cuando realizaba instalación de TV pero en lo personal, me gustó más las redes.
                        <br/> <br/> 
                        Luego de eso, ascendí a técnico y realizaba casi lo mismo. Pero dad la experiencia hubo un giro de tuerca que me llevó al otro
                        lado del juego; es decir, estar en oficina como documentador e interventor. Así con el tiempo, esfuerzo y constancia hasta hoy en día
                        ocupar el puesto de Líder documentador de telecomunicaciones interviniendo y auditando:
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i class="fas fa-angle-right color-3"></i> GSM</li>
                        <li className="list-group-item"><i class="fas fa-angle-right color-3"></i> UMTS</li>
                        <li className="list-group-item"><i class="fas fa-angle-right color-3"></i> LTE</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>

            <Shape2/>
            
            <div className="bg-gradient-linkedin text-light row mt-5">
                <h4 className="col mt-4">Puedes ver mi currículum en linkedin</h4>
                <a href="https://linkedin.com/in/iamsergiocampbell" 
                target="_blank" className="btn btn-content col" rel="noreferrer">Ver currículum</a>
            </div>
        </section>
    )
}
