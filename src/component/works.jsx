import React from 'react'
import './component.css'
/*gallery*/
import poko from '../assets/clientes/manual2.png'
import cromados from '../assets/projects/cromados.png'
import flappy from '../assets/projects/flappy.png'
import fs from '../assets/projects/fs.png'
import emirror from '../assets/projects/emirror.jpg'
import chat from '../assets/projects/react-chat.png'
import vbb from '../assets/projects/vbb.png'
import sacv from '../assets/logo-sacvBIG.png'

//const api = "http://localhost:4000/web"

export default function Works(){
    
    //config projects
   /*  const [project, setProject] = useState([])

    useEffect(() => {
        fetch(api).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setProject(jsonRes))
    }, []) */


    return(
        <section className="container projects mt-5">
        <h2 className="display-3 mb-5">Proyectos realizados</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">

                <div className="col">
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

                <div className="col">
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

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src={vbb} className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">VBB Ingenieria</h5><span className="badge bg-dark color-3">ReactJs</span>
                            <p className="card-text">Web landing informativa sobre servicios de telecomunicaciones y electrónica.</p>
                            <a href="https://github.com/SergioCampbell/vbb" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://sergiocampbell.github.io/vbb/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src={fs} 
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fine Solutions</h5><span className="badge bg-dark color-3">Angular</span>
                            <p className="card-text">Web Landing informativa</p>
                            <a href="https://github.com/SergioCampbell/fine-solutions/tree/main/fs/src" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://portfolio-sacv.firebaseapp.com/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src={flappy}
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">flappy Bird</h5><span className="badge bg-dark color-3">JavaScript</span>
                            <p className="card-text">Video juego indi realizado con JavaScript</p>
                            <a href="https://github.com/SergioCampbell/flappyAngryBird" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://sergiocampbell.github.io/flappyAngryBird/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
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

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src="https://via.placeholder.com/500" 
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Ecam</h5><span className="badge bg-dark color-3">Ionic</span>
                            <p className="card-text">App galeria de fotografias</p>
                            <a href="https://github.com/SergioCampbell/ECam/tree/master/src" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="#" target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src={poko} className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Poko Sketch</h5><span className="badge bg-dark color-3">ReactJs</span>
                            <p className="card-text">Web personal para fotografos.</p>
                            <a href="https://github.com/SergioCampbell/PokoLanding/tree/master/src" 
                            target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://pokodesing.000webhostapp.com/" 
                            target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg d-inline-block border border-secondary">
                        <img src="https://via.placeholder.com/500" 
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">I am here safe</h5><span className="badge bg-dark color-3">ReactJs & Ionic</span>
                            <p className="card-text">En construcción</p>
                            <a href="#" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="#" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow d-inline-block border border-secondary">
                        <img src={sacv} 
                        className="card-img-top img-standard" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Más proyectos</h5><span className="badge bg-warning text-dark">New</span>
                            <p className="card-text">Aquí</p>
                            <a href="https://github.com/sergiocampbell" target="_blank" rel="noreferrer" className="color-1">Source code</a> - 
                            <a href="https://sergiocampbell.github.io/sacv" target="_blank" rel="noreferrer" className="color-1"> Demo</a>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    )
}