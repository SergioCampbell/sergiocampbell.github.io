import React, { useState } from 'react'

export default function Services(){

    const [bdData, setDbData] = useState('')
    
    return(
        <>
        <h2 className="display-3">Servicios y habilidades</h2>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}