import React, { useRef, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';



export const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_51ovs0k',
        'template_eow5exq',
        {
          from_name: form.name,
          to_name: "Hope Jr Ajoku",
          from_email: form.email,
          to_email: "hajoku0@gmail.com",
          message: form.message,
        },
        'E1a1xweM4CMozEK_N'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Me</h2>

          <form ref={formRef} 
          onSubmit={handleSubmit}>
          <Row>
             <Col size={12} sm={6} className="px-1">
               <input type="text" 
               value={form.name} 
               placeholder="Enter Name" 
               name="name" onChange={handleChange} />
             </Col>
          
             <Col size={12} sm={6} className="px-1">
               <input type="email" 
               value={form.email} 
               placeholder="Enter Email Address" 
               name="email" 
               onChange={handleChange} />
             </Col>
             
             <Col size={12} className="px-1">
               <textarea rows="6" 
               value={form.message} 
               placeholder="Enter Your Message" name="message" 
               onChange={handleChange}></textarea>
               <button 
               type="submit" >
                <span>
                  {loading ? "Sending..." : "Send"}
                </span>
               </button>
             </Col>
          </Row>
          </form>
          </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};