
import React, { useRef } from 'react';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export default function ContactForm() {
const form = useRef();
const [wasSended, setWasSended] = React.useState(false)
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    emailjs.sendForm("service_ztojqk4", "template_n0zrrmg",
        form.current, "user_rB8qWaGWX9OFw575diXB3")
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
        <label>
            <span>Name</span><br />
            <input className='contactInput' type="text" name="nameEmail" placeholder="Your name" required />

        </label>
        <label>
            <span>Email</span><br />
            <input className='contactInput' required name="userEmail" type="email" placeholder='Email address'
        />

        </label>
        <label>
            <span>Message</span><br />
            <textarea className='contactTextarea' required name="emailDetails" placeholder="Your message"></textarea>

        </label>
      <br/>
    <div aria-required="true" className="g-recaptcha" data-sitekey="6Ldh4UYpAAAAAKppId-7T95Qq0Ut-kA3VuiDmx1T"></div>
        <button type="submit" className='contactBtn'>Send Me a Message 📧</button>
    </form> 
    : <h2>Thank you for your message!</h2>}</>
    )
}
