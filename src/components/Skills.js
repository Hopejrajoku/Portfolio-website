import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from 'react-bootstrap';
import hundred from "../assets/img/hundred.svg";
import Github2 from "../assets/img/Github2.svg";
import Figma from "../assets/img/Figma.svg";
import Css from "../assets/img/Css.svg";
import django from "../assets/img/django.svg";
import firebase from "../assets/img/firebase.svg";
import Html from "../assets/img/Html.svg";
import Javascript from "../assets/img/Javascript.svg";
import Reactjs from "../assets/img/Reactjs.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    };



  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>Here are the skills I have learned and still learning</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={hundred} alt=''/>
                            <h5>Fast Learner</h5>
                        </div>

                        <div className='item'>
                            <img src={hundred} alt=''/>
                            <h5>Easily Adapt</h5>
                        </div>

                        <div className='item'>
                            <img src={Html} alt=''/>
                            <h5>HTML</h5>
                        </div>

                        <div className='item'>
                            <img src={Css} alt=''/>
                            <h5>CSS</h5>
                        </div>

                        <div className='item'>
                            <img src={Javascript} alt=''/>
                            <h5>Javascript</h5>
                        </div>

                        <div className='item'>
                            <img src={Reactjs} alt=''/>
                            <h5>React.js</h5>
                        </div>

                        <div className='item'>
                            <img src={Reactjs} alt=''/>
                            <h5>React Native</h5>
                        </div>

                        <div className='item'>
                            <img src={django} alt=''/>
                            <h5>Django</h5>
                        </div>

                        <div className='item'>
                            <img src={firebase} alt=''/>
                            <h5>Firebase</h5>
                        </div>

                        <div className='item'>
                            <img src={Figma} alt=''/>
                            <h5>Figma</h5>
                        </div>

                        <div className='item'>
                            <img src={Github2} alt=''/>
                            <h5>GitHub</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt=''/>
    </section>
  )
}

export default Skills
