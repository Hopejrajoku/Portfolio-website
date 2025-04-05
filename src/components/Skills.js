import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png";
import { skills } from '../constants';

const Skills = () => {
    return (
        <section className="skill" id="skills" >
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                    <div className="skill-bx p-6">
                        <h2 className="mb-3">Skills</h2>
                        <p className="mb-4 ">
                            These are the skills I have learned and continue to improve on.
                        </p>
                        <Carousel 
                            indicators={false} 
                            controls={false} 
                            interval={2000} 
                            fade={true} 
                            pause={false}
                            touch={true}
                            className="custom-carousel"
                        >
                            {skills.map((skill, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex flex-column align-items-center">
                                        <img 
                                            src={skill.img} 
                                            alt={skill.name} 
                                            className="img-fluid mb-3" 
                                            style={{ height: "100px", objectFit: "contain" }} 
                                        />
                                        <h5>{skill.name}</h5>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

            {/* Background Image (decorative) */}
            <img 
                className="position-absolute start-0 top-0 w-100 opacity-10" 
                src={colorSharp} 
                alt="decorative background" 
                style={{ zIndex: -11 }} 
            />
        </section>
    );
};

export default Skills;
