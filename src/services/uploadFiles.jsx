import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

//name of backend
const api = "http://localhost:4000/web"

export default function Upload(){
    
    //config projects
    const [project, setProject] = useState([])

    //watching changes in inputs
    const handleInputChange = (event) => {
        setProject({
            ...project,[event.target.name] : event.target.value
        })
        //console.log(event.target.value)
    }

    //validating
    const {handleSubmit} = useForm();

    const sentData = (e => {
       //e.preventDefault()

        const registered = {
            Name: project.Name,
            Description: project.Description,
            Language: project.Language,
            ImageURL: project.ImageURL
        }

        console.log('sending data ...')

        axios.post(api , registered)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
        
        setProject({
            Name: '',
            Description: '',
            Language: '',
            ImageURL: ''
        }) })

    return(    

        <section id="upload">
            <form onSubmit={handleSubmit(sentData)} enctype="multipart/form-data">
                <div className="mb-3">
                    <input type="text"
                    placeholder="Name"
                    onChange={handleInputChange}
                    name="Name"
                    required
                    className="form-control" />
                </div>

                <div className="mb-3">
                    <input type="text"
                    placeholder="Description"
                    onChange={handleInputChange}
                    name="Description"
                    required
                    className="form-control" />
                </div>

                <div className="mb-3">
                    <input type="text"
                    placeholder="Language"
                    onChange={handleInputChange}
                    name="Language"
                    required
                    className="form-control" />
                </div>

                <div className="mb-3">
                    <input type="file"
                    placeholder="ImageURL"
                    onChange={handleInputChange}
                    name="ImageURL"
                    required
                    className="form-control" />
                </div>

                <button className="btn btn-outline-warning mb-3" type="submit">Upload</button>
            </form>
        </section>
    )
}