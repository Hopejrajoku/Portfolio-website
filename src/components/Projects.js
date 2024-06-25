import React from 'react'
import { Col, Container, Row, Tab , Nav} from 'react-bootstrap';
//import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import Care from '../assets/img/carechain.jpeg'
import coincept1 from "../assets/img/coincept1.svg";
import comm from "../assets/img/comm.svg";
import TrackVisibility from 'react-on-screen';



const Projects = () => {

  
      


  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div classsName={isVisible ? "animate__animated animate__bounce" : ""}>
                <h2>Projects</h2>
                <p>Here are the list of some of the projects I worked on in my one year as a self taught developer, I intend to gain more experince so I keep building.</p>
                  </div>}
                </TrackVisibility>
                <Tab.Container id='projects-tab' defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills justify-content-center align-items-center" id="pills-tab">
                 <Nav.Item>
                   <Nav.Link eventKey="first">Web Design</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="second">Mobile Design</Nav.Link>
                 </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row className='Poject-row'>


                        <Col sm={6} md={4}>
                            <div className='proj-cardd'>
                            <img src={Care} alt='' style={{ marginTop: 40}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title mt-3'>Carechain</h4>
                            <p>This is a Biomedic blockchain project, designed to improve lives with the help of blockchain tech and AI. Built with React.js</p>
                            </div>
                            <div className='proj-cardd-btn' style={{ marginTop: 10}} >
                            <a href='https://carechain.vercel.app/' target="_blank" rel="noopener noreferrer" className='proj-button'>View Project</a>
                            </div>
                            </div>
                            </Col>


                            <Col sm={6} md={4}>
                            <div className='proj-cardd'>
                            <img src={coincept1} alt='' style={{ marginTop: 40}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title mt-3'>Crypto Price app</h4>
                            <p>This is a very simple, easy to use Cryptocurrency price tracker app, built with React, ContextAPI, MaterialUI,Firebase and ChartJS</p>
                            </div>
                            <div className='proj-cardd-btn' style={{ marginTop: 10}}>
                            <a href='https://coincept.netlify.app/' target="_blank" rel="noopener noreferrer" className='proj-button' role='button'>View Project</a>
                            </div>
                            </div>
                            </Col>

                            

                            <Col sm={6} md={4}>
                            <div className='proj-cardd'>
                            <img src={comm} alt='' style={{ marginTop: 40}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title mt-3'>Coming Soon</h4>
                            <p>This project will be available once completed and promised to be worth the time and effort, enjoying the buiding process</p>
                            </div>
                            <div className='proj-cardd-btn' style={{ marginTop: 10}}>
                            <a href='##' className='proj-button'>Coming Soon</a>
                            </div>
                            </div>
                            </Col>

                            
                            
                        </Row>
                    </Tab.Pane>
                    
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt='' />
    </section>
  )
}

export default Projects
