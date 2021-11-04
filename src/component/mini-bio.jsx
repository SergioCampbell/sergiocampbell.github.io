import React from 'react'
import { Link } from 'react-router-dom'

import sacv from '../assets/logo-sacvBIG.png'

import './component.css'

export default function MiniBio(){
    return(
        <>
        <section className="mt-3 mb-3 container clearfix">
            <div className="row">
                <div className="col col-md-6">
                    <img src={sacv} alt="logo sacv"
                    className=" mini" />
                </div>

                <div className="col col-md-6">
                    <p className="text-justify">
                        Me he dedicado desde el 2010 hasta ahora al desarrollo web;
                        sin embargo, también he aprendido sobre reparación de equipos
                        de computo y telecomunicaciones. <br/>
                        Esto me ha permitido desenvolverme en ambas áreas realizando 
                        trabajos tanto de diseño y maquetación de plantillas web como 
                        también instalación y mantenimiento de líneas telefónicas, ADSL y TV.
                        <br/>
                        Actualmente me estoy especializando en desarrollo web y auditoría e interventoria
                        de proyectos nuevos. Esto para el crecimiento de mi marca personal SACV &nbsp;
                    <Link to="/bio"><span className="color-4">Seguir leyendo</span></Link>
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}