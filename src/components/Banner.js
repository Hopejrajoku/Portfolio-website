import { useEffect, useState}  from 'react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loo from '../assets/img/Loo.jpg';
import "animate.css";
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Frontend Developer", "UX/UI Designer", "Web3 Enthusiast" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return() => {clearInterval(ticker)} 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section className='banner' id='home'>
       <div classsName="overlay">
        
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {({ isVisible }) =>
                  
                  <div classsName={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                    <h1 style={{ color: '#f5f5f4'}}>{`Hi! I'm Hope Jr, a`}<span className='wrap'></span> {text}</h1>
                    <p>I am a passionate Frontend Developer with a knack for creating visually stunning and functional web applications. Skilled in HTML, CSS, JavaScript, and frameworks like React, I excel in building responsive, user-friendly interfaces.

                     My expertise ensures optimal performance and accessibility by leveraging the latest frontend technologies. I thrive in collaborative environments, contributing to both design and technical aspects to exceed user expectations.
                     
                     With a keen eye for design and attention to detail, I am dedicated to continuous learning and staying current with web development trends. My goal is to blend creativity and technical skills to deliver exceptional value to users and stakeholders.
                     </p>
                    
                  </div>
                  }
                  </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={Loo} alt='' style={{borderRadius:'50%'}}/>
                </Col>
            </Row>
        </Container>
        </div>
        
    </section>
  )
}

export default Banner
