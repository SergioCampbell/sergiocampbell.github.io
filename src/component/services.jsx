import React, { useState, useEffect } from 'react'
import Upload from '../services/uploadFiles'

const api = "http://localhost:4000/web"

export default function Services(props){

    //config projects
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(api).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setProject(jsonRes))
    }, [])

    
    return(
        <>
        <h2 className="display-3">Servicios y habilidades</h2>

        <div className="container">
        <Upload/>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {project.map((project, index) => 

                    <div className="col" key={index}>
                        <div className="card">
                            <img src={project.ImageURL} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{project.Name}</h5><span>{project.Language}</span>
                                <p className="card-text">{project.Description}</p>
                            </div>
                        </div>
                </div>

                )}

            </div>
        </div>
        </>
    )
}