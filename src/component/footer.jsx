import React, {useState} from 'react'
import './component.css'
/*cdivents*/
import optecom from '../assets/clientes/optecom.png'
import ita from '../assets/clientes/logoITA.png'
import cromados from '../assets/clientes/logo-cromados1.png'
import liteyca from '../assets/clientes/liteycalogo.png'
import optimacom from '../assets/clientes/optimacom.png'
import poko from '../assets/clientes/manual2.png'
import vbb from '../assets/clientes/logovbb.png'

import { Link } from 'react-router-dom'

function Footer() {

    const [navState, setNavState] = useState('')
    const navTab = (index) => {
      setNavState(index)
    }

    return(
        <div className="container-fluid mt-5 bg-gradnt text-white">
        <section className="row bg-dark-gradnt">
        <h3 className="mt-3">Quienes confian en mi labor y gestión:</h3>
            <div className="col">
                <p>
                    A lo largo de mi experiencia profesional tanto laboral como freelance, se ha construido
                    bases y fundamentos para hacer mejor las actividades y tareas como aportar al crecimiento profesional y personal.
                </p>
                <div className="slider container ">
                    <div className="slider-track row">
                        <div className="slide col">
                        <img src={liteyca} alt="..." className="img-slider two img-fluid" loading="lazy" />
                        <img src={poko} alt="..." className="img-slider three img-fluid" loading="lazy" />
                        <img src={optecom} alt="..." className="img-slider one img-fluid" loading="lazy"/>
                        <img src={vbb} alt="..." className="img-slider one img-fluid" loading="lazy"/>
                        </div>
                        <div className="slide col">
                        <img src={cromados} alt="..." className="img-slider four img-fluid" loading="lazy"/>
                        <img src={ita} alt="..." className="img-slider five img-fluid" loading="lazy"/>
                        <img src={optimacom} alt="..." className="img-slider six img-fluid" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="text-light big-text">
                <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <h3>¿Hablamos?</h3>
                        <a href="./contact" className="btn  btn-outline-light btn-lg btn-xl" type="button">Contacto</a>
                    <div className="row mt-5"> 
                    <div className="col">
                        <i class="fas fa-map-marker-alt icon"></i>
                        <p>Barranquilla, Colombia</p>
                    </div>
                    <div className="col">
                        <i class="far fa-envelope icon"></i>
                        <a href="info@sergiocampbell.dev" type="email"><p>info@sergiocampbell.dev</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

            <nav>
            <ul className="nav">
                <li className="nav-item nav-footer">
                <Link className={navState === 1 ? "nav-link active" : "nav-link"}
                onClick={() => navTab(1)}
                to="/"><p className="text-light">Home</p></Link>
                </li>
                <li className="nav-item nav-footer">
                <Link className={navState === 2 ? "nav-link active" : "nav-link"}
                onClick={() => navTab(2)}
                to="/Bio"><p className="text-light">Bio</p></Link>
                </li>
                <li className="nav-item nav-footer">
                <Link className={navState === 3 ? "nav-link active" : "nav-link"}
                onClick={() => navTab(3)}
                to="/Portfolio"><p className="text-light">Portafolio</p></Link>
                </li>
                <li className="nav-item nav-footer">
                <Link className={navState === 4 ? "nav-link active" : "nav-link"}
                onClick={() => navTab(4)}
                to="/Contact"><p className="text-light">Contacto</p></Link>
                </li>

                <li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                </li>

                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-facebook-f footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-twitter footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-linkedin-in footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-youtube footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-instagram footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-github footer-icon"></i></a>
                </li>
                <li className="nav-item nav-footer">
                    <a href="#" target="_blank" ><i className="fab fa-codepen footer-icon"></i></a>
                </li>
            </ul>
            </nav>
        <hr/>
            <div className="mt-3">
            <p className="text-center text-light">
                Handcrafted with much &nbsp;<i className="fas fa-coffee icon" ></i>&nbsp; and &nbsp;<i className="fas fa-heart icon"></i> &nbsp;  {new Date().getFullYear()}
            ;&nbsp;
                using &nbsp;
                <a href="https://es.reactjs.org/" target="_Blank" className="text-light" rel="noreferrer">
                <i className="fab fa-react icon"></i>
                </a>&nbsp;
                and stylized with &nbsp;
                <a href="https://getbootstrap.com/" target="_Blank" className="text-light" rel="noreferrer">
                <i className="fab fa-bootstrap icon"></i>
                </a>
            </p>
            </div>
        </div>
    )
}

export default Footer