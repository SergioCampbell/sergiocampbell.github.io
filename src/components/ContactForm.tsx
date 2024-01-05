
import React, { useRef } from 'react';
// import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface FormData {
    subject: string;
    email: string;
    message: string;
}

export default function ContactForm() {
const form = useRef<HTMLFormElement>(null);
const [wasSended, setWasSended] = React.useState(false)
// const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
//   const submit: SubmitHandler<FormData> = (data: FormData) => {
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
    // <form ref={form} className='contact' onSubmit={handleSubmit(submit)}>
    <form ref={form} className='contact' onSubmit={submit}>
    <div className="g-recaptcha" data-sitekey={import.meta.env.RECAPTCHA}></div>
        <label>
            <span>Subject</span><br />
            <input className='contactInput' type="text" name="subject" placeholder="Subject email" required />
            {/* <input className='contactInput' type="text"{...register("subject", { required: "Subject is required" })}
            aria-invalid={errors.subject ? "true" : "false"} placeholder="Subject email" />
            {errors.subject && <p role="alert" style={{color: "red"}}>{errors.subject.message}</p>} */}
        </label>
        <label>
            <span>Email</span><br />
            <input className='contactInput' required name="email" type="email" placeholder='Email address'
        />
            {/* <input className='contactInput'
            {...register("email", { required: "Email Address is required" })} type="email" placeholder='Email address'
            aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert" style={{color: "red"}}>{errors.email.message}</p>} */}
        </label>
        <label>
            <span>Message</span><br />
            <textarea className='contactTextarea' required name="message" placeholder="Your message"></textarea>
            {/* <textarea className='contactTextarea' {...register("message", { required: "Message is required" })}
            aria-invalid={errors.message ? "true" : "false"} placeholder="Your message"></textarea>
            {errors.message && <p role="alert" style={{color: "red"}}>{errors.message.message}</p>} */}
        </label>
      <br/>
        <button type="submit" className='contactBtn'>Send Me a Message 📧</button>
    </form> 
    : <h2>Thank you for your message!</h2>}</>
    )
}
