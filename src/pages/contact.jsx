import React from 'react'
import { Fragment, useState } from 'react'
import './pages.css'
//emailjs to send email from the website
import emailjs, { init } from 'emailjs-com';

init("user_rB8qWaGWX9OFw575diXB3");

function Contact() {

    const frmContact = { userEmail:'', nameEmail:'', emailDetails:'' };
    const [contact,setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => { 
            const {name,value} = e.target;
            setContact({...contact,[name]:value}); 
    };
    const handleSubmit = e =>{
            e.preventDefault();
        
            emailjs.send('service_nt2v9sp','template_d9g26wn', contact, 'user_rB8qWaGWX9OFw575diXB3')
            .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
                    setShowMessage(true);
            }, (err) => {
                    console.log('FAILED...', err);
            });
    }

    return(
        <Fragment>
        <section>
        <div className="bg-gradient-contact"><br/>
        <div className="mt-5">
            <h2 className="display-6 text-shadow">COMO FREELANCE, MI LUGAR DE TRABAJO ES VARIABLE.</h2>
        <p className=" text-shadow">Vivo en Barranquilla, Colombia; pero tengo total disponibilidad para trasladarme allí donde me necesite.</p>
        <a href="#contact-me" className="btn btn-content text-shadow btn-lg shadow-lg">Contacta conmigo</a>
        </div>
        </div>
        </section>

        <iframe className="map container mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125335.33318368332!2d-74.88805811168668!3d10.983803942736984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1635530463903!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy"></iframe>

        <div className="container mt-5" id="contact-me">
            <div className="row">
            <h3 className="display-6 mb-3">Contacto</h3>
                <div className="col-sm-5 col-md-6">
                    <p className="mt-4 mb-5">Puedes ponerte en contacto conmigo utilizando el siguiente formulario de contacto, o enviándome un email a &nbsp;
                     <a className="text-secondary" href="info@sergiocampbell.dev" type="email">info@sergiocampbell.dev</a></p>
                </div>
                <form className="col-sm-5 col-md-6" onSubmit={handleSubmit}>
                    <input type="email"
                    name="nameEmail"
                    value={contact.nameEmail}
                    onChange={handleChange}
                     className="form-control shadow border border-1 border-secondary mb-3" 
                     id="exampleFormControlInput1" 
                     placeholder="name@example.com"
                         required
                     />
                    <textarea
                    type="text" required
                    name="emailDetails"
                    value={contact.emailDetails}
                    onChange={handleChange}
                    className="form-control shadow border border-1 border-secondary" 
                    placeholder="Tu mensaje va aquí :D recuerda dejar tu nombre."
                    id="exampleFormControlTextarea1" rows="3"
                    ></textarea>
                    { showMessage ? <div className="alert alert-success mt-3 col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ''}
                    <button type="submit" className="btn btn-submit">Enviar</button>
                    </form>
            </div>
            
        </div>
            <div className="bg-gradient-linkedin text-light row">
                <h4 className="col mt-4">Puedes ver mi currículum en linkedin</h4>
                <a href="https://linkedin.com/in/iamsergiocampbell" 
                target="_blank" className="btn btn-content col" rel="noreferrer">Ver currículum</a>
            </div>
        </Fragment>
    )
}

export default Contact