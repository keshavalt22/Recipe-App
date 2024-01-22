import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { service_id, template_id, user_id } from '../utils/content';
import Footer from './Footer';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      emailjs.sendForm(service_id, template_id, e.target, user_id)
        .then((res) => {
          setName("");
          setEmail("");
          setMessage("");
          alert("message sent")
        }, (error) => {
          console.log(error)
        })
    } else {
      alert("Please fill all fields");
    }
  }
  return (
    <section className="contact" id='contact'>
      <div className="contact-text">
        <p>Culinary Connections</p>
        <h2>Contact</h2>
        <p className="dull">Your kitchen, our expertise. Connect with us for personalized recipe suggestions and culinary assistance.</p>
      </div>
      <div className="contact-box">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea name="message" id="" cols="50" rows="10" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <input type="submit" className="contact-btn" />
        </form>
      </div>
      <Footer />
    </section>
  )
}

export default Contact;