import React from 'react'; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png";
import { skills } from '../constants';


const Skills = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="skill-bx p-6">
                            <h2 className="mb-3">Skills</h2>
                            <p className="mb-4">These are the skills I have mastered and continue to refine.</p>
                            <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true}  
                            className="skill-slider"
                            renderButtonGroupOutside={false} 
                            arrow={false}

                            >   
                                {skills.map((skill, index) => (
                                    <div key={index} className="item text-center">
                                        <img src={skill.img} alt={skill.name} className="img-fluid mx-auto d-block" style={{ height: "80px" }} />
                                        <h5 className="mt-2">{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" style={{ width: "100%", opacity: 0.1 }} />
        </section>
    );
};

export default Skills;
