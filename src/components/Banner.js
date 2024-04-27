import { useEffect, useState}  from 'react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import "animate.css";
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Frontend Developer", "Fullstack Web Developer", "UX/UI Designer", "Web3 Enthusiast"];
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
                    <span className='tagline'>Thank You For Your Time</span>
                    <h1 style={{ color: '#f5f5f4'}}>{`Hi! I'm Hope Jr, a`}<span className='wrap'></span> {text}</h1>
                    <p>Welcome to my Portfolio website, I am Hope jr a web Developer, I bring expertise in web development with solid background in UI/UX design. With a passion for clean, efficient code and a knack for problem solving, I thrive in collaborative environments. Committed to delivering exceptional user experience and expanding my skill to meet evolving industry demands. </p>
                    <button onClick={() => console.log('connect')}>Get intouch <ArrowRightCircle size={25} /></button>
                  </div>
                  }
                  </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='' />
                </Col>
            </Row>
        </Container>
        </div>
        
    </section>
  )
}

export default Banner
