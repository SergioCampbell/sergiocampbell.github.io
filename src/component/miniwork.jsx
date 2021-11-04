import React from 'react'
import chat from '../assets/projects/react-chat.png'
import cromados from '../assets/projects/cromados.png'
import emirror from '../assets/projects/emirror.jpg'
import sacv from '../assets/logo-sacvBIG.png'
import { Link } from 'react-router-dom'

export default function Miniwork(){
    return(
        <div className="left row">
            <div className="col col-sm-6 col-lg-4">
                    <div className="card  shadow-lg d-inline-block border border-secondary">
                        <img src={chat} className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">React Chat</h5><span className="badge bg-dark color-3">ReactJs</span>
                            <p className="card-text">Chat online con back-end Firebase</p>
                            <a href="https://github.com/SergioCampbell/ReactChat" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://chat-react-c9d77.web.app/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col col-sm-6 col-lg-4">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src={emirror} 
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">E-mirror</h5><span className="badge bg-dark color-3">ReactJs</span>
                            <p className="card-text">description</p>
                            <a href="#" target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://espejos-led.web.app/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                        </div>
                    </div>
                </div>

            <div className="col col-sm-6 col-lg-4">
                <div className="card  shadow-lg d-inline-block border border-secondary">
                        <img src={cromados} className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cromados Barranquilla</h5><span className="badge bg-dark color-3">AngularJs</span>
                            <p className="card-text">description</p>
                            <a href="https://github.com/SergioCampbell/Plantilla_web_AngularJS"
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://cromadosbarranquilla.com.co/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                        </div>
                    </div>
                </div>

                <div className="col col-sm-6 col-lg-4">
                    <div className="card shadow d-inline-block border border-secondary">
                        <Link to="/portfolio"><img src={sacv} 
                        className="card-img-top img-standard" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title">Más proyectos</h5><span className="badge bg-warning text-dark">New</span>
                            <p className="card-text">Aquí</p>
                            <Link to="/portfolio"><span className="color-2">Ir al portafolio</span></Link>
                            </div>
                    </div>
                </div>

            </div>
    )
}