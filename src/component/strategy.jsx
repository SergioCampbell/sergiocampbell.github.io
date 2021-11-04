import React, { useState } from 'react'
import './component.css'

export default function Strategy(){

    const one = useState(
        {
            title: 'Transparencia',
            desc: 'Poder comunicar todos y cada uno de los pasos en la planeación y ejecución del proyecto.'
        }
    )

    const two = useState(
        {
            title: 'Flexibilidad',
            desc: 'Gracias a la comunicación tenemos recursos para manejar y otorgar.'
        })

    const three = useState(
        
        {
            title: 'Adaptación',
            desc: 'El mundo cambia constantemente; tranquilo, estoy contigo.'
        }
    )

    const four = useState(
        {
            title: 'Colaboración',
            desc: 'Lo considero parte fundamental en cualquier proyecto.'
        })    

    return(
        <>
        <div className="bg-gradnt row" loading="lazy">
            <div className="strategy-card col mt-3 text-light mb-3">
            <i className="fas fa-lg fa-hand-sparkles color-3 icon"></i>
            <div className="bg-second-gradient four-card">
                <span><i className="fas fa-lg fa-hand-sparkles color-3 icon"></i></span>
                    {one.map((one) =>(
                        <><h5>{one.title}</h5><p>{one.desc}</p></>
                    ))}             
                </div>
            </div>

            <div className="strategy-card col mt-3 bg-dark-gradient text-light mb-3">
            <i className="fab fa-lg fa-buromobelexperte color-3 icon"></i>
            <div className="bg-second-gradient four-card">
                <span><i className="fab fa-lg fa-buromobelexperte color-3 icon"></i></span>
                {two.map((one) =>(
                        <><h5>{one.title}</h5><p>{one.desc}</p></>
                    ))}   
                </div>
            </div>

            <div className="strategy-card col mt-3 bg-dark-gradient text-light mb-3">
            <i className="fab fa-lg fa-medapps color-3 icon"></i>
            <div className="bg-second-gradient four-card">
                <span><i className="fab fa-lg fa-medapps color-3 icon"></i></span>
                {three.map((one) =>(
                        <><h5>{one.title}</h5><p>{one.desc}</p></>
                    ))}   
                </div>
            </div>

            <div className="strategy-card col mt-3  text-light mb-3">
            <i className="fas fa-lg fa-globe color-3 icon"></i>
                <div className="bg-second-gradient four-card">
                <span><i className="fas fa-lg fa-globe color-3 icon"></i></span>
                {four.map((one) =>(
                        <><h5>{one.title}</h5><p>{one.desc}</p></>
                    ))}   
                </div>
            </div>
        </div>
        </>
    )
}