import React from 'react'
import { Link } from 'react-router-dom'

import './component.css'

export default function Wais(){
    return(
        <section className="container">
        <div className="row">
            <div className="col">
                <h4>Desarrollo web</h4>
            <p>
                Me destaco por el uso de frameworks como:
                <ul>
                    <li><i className="color-2 fa-lg fab fa-react"></i> &nbsp; React Js</li>
                    <li><i className="color-2 fa-lg fab fa-angular"></i> &nbsp; Angular Js</li>
                    <li><i className="color-2 fa-lg far fa-dot-circle"></i> &nbsp; Ionic</li>
                </ul>

                Bases de datos:
                <ul>
                    <li><i className="color-2 fa-lg fas fa-database"></i> &nbsp; Sql Server</li>
                    <li><i className="color-2 fa-lg fas fa-cloud-upload-alt"></i> &nbsp; MongoDB</li>
                </ul>
                Estoy estudiando el correcto uso de Firebase para adaptarlo a las Apps y manejo de datos con 
                fuentes externas. <Link to="/portfolio"><span className="color-5">Ver app funcional con Firebase</span></Link>
            </p>
            </div>

            <div className="col">
                <h4>Telecomunicaciones</h4>
            <p>
                Realizando desde instalación y mantenimiento de líneas telefónicas 
                hasta el liderazgo de documentación para redes móviles:
                <ul>
                    <li><i className="fas fa-signal color-2"></i> &nbsp; GSM</li>
                    <li><i className="fas fa-satellite-dish color-2"></i> &nbsp; UMTS</li>
                    <li><i className="fas fa-mobile-alt color-2"></i> &nbsp; LTE</li>
                </ul>
                Administrando los repositorios:
                <ul>
                    <li><i className="color-2 fas fa-angle-right"></i> &nbsp; SharePoint</li>
                    <li><i className="color-2 fas fa-angle-right"></i> &nbsp; Maximo</li>
                    <li><i className="color-2 fas fa-angle-right"></i> &nbsp; NDPd</li>
                    <li><i className="color-2 fas fa-angle-right"></i> &nbsp; SkyTool</li>
                </ul>
                En este último me dedico a ejecutar auditoría e interventoría de proyectos
                y documentación con base a las exigencias del cliente más las reglas internas.
            </p>
            </div>
        </div>
        </section>
    )
}