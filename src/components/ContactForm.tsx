
import React, { useRef } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface FormData {
    subject: string;
    email: string;
    message: string;
}

export default function ContactForm() {
const form = useRef<HTMLFormElement>(null);
const [wasSended, setWasSended] = React.useState(false)
  const submit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, form.current, import.meta.env.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          setWasSended(true);
      }, (error: any) => {
          console.log(error.text);
      });
}

return(
    <>
    {!wasSended ?
    <form ref={form} className='contact' onSubmit={submit}>
    <div className="g-recaptcha" data-sitekey={import.meta.env.RECAPTCHA}></div>
        <label>
            <span>Subject</span><br />
            <input className='contactInput' type="text" name="subject" placeholder="Subject email" required />

        </label>
        <label>
            <span>Email</span><br />
            <input className='contactInput' required name="email" type="email" placeholder='Email address'
        />

        </label>
        <label>
            <span>Message</span><br />
            <textarea className='contactTextarea' required name="message" placeholder="Your message"></textarea>

        </label>
      <br/>
        <button type="submit" className='contactBtn'>Send Me a Message 📧</button>
    </form> 
    : <h2>Thank you for your message!</h2>}</>
    )
}
