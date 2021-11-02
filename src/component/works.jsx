import React from 'react'

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
        <section className="container projects">
        <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Title project 1</h5>language<span></span>
                                <p className="card-text">description</p>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    )
}