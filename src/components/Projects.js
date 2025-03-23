import React from 'react'
import { Col, Container, Row, Tab , Nav} from 'react-bootstrap';
//import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import Care from '../assets/img/carechain.jpeg'
import coincept1 from "../assets/img/coincep.jpeg";
import comm from "../assets/img/Web.jpeg";
import swtfyn from "../assets/img/swytfyn.jpeg";
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


                        <Col sm={6} md={4} className='project-cont'>
                            <div className='proj-cardd'>
                            <img src={Care} alt='' style={{ marginTop: 40, height: "230px"}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title'>Carechain</h4>
                            <p>This is a Biomedic blockchain project, designed to improve lives with the help of blockchain tech and AI. Built with React.js</p>
                            </div>
                            <div className='proj-cardd-btn'  >
                            <div style={{display: "flex", justifyContent: "center"}}>
                              <a href='https://carechain.vercel.app/' target="_blank" rel="noopener noreferrer" className='proj-button'>View Project</a>
                            </div>
                            </div>
                            </div>
                            </Col>


                            <Col sm={6} md={4}>
                            <div className='proj-cardd'>
                            <img src={coincept1} alt='' style={{ marginTop: 40, height: "230px"}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title'>Crypto Price app</h4>
                            <p>This is a very simple, easy to use Cryptocurrency price tracker app, built with React, ContextAPI, MaterialUI,Firebase and ChartJS</p>
                            </div>
                            <div className='proj-cardd-btn'>
                            <div style={{display: "flex", justifyContent: "center"}}>
                            <a href='https://coincept.netlify.app/' target="_blank" rel="noopener noreferrer" className='proj-button' role='button'>View Project</a>
                            </div>
                            </div>
                            </div>
                            </Col>

                            

                            <Col sm={6} md={4} className='project-cont'>
                            <div className='proj-cardd'>
                            <img src={comm} alt='' style={{ marginTop: 40, height: "230px"}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title'>CareerelpAI</h4>
                            <div >
                            <p>This project is an app that lets you participate in mock interview quizes, generate CV like a pro with the help of AI and many more.</p>
                            </div>
                            </div>
                            <div className='proj-cardd-btn'>
                            <div style={{display: "flex", justifyContent: "center"}}>
                            <a href='https://careerhelpai.vercel.app/' target="_blank" rel="noopener noreferrer" className='proj-button'>View Project</a>
                            </div>
                            </div>
                            </div>
                            </Col>


                            <Col sm={6} md={4} className='project-cont'>
                            <div className='proj-cardd'>
                            <img src={swtfyn} alt='' style={{ marginTop: 40, height: "230px"}} />
                            <div className='proj-cardd-txt'>
                            <h4 className='title'>SwtFyn</h4>
                            <div >
                            <p>Finance management app, that let users plan and keep track of their spending, save, budget accordingly, with automatic scanning feature with te help of AI </p>
                            </div>
                            </div>
                            <div className='proj-cardd-btn'>
                            <div style={{display: "flex", justifyContent: "center"}}>
                            <a href='https://swtfyn.vercel.app/' target="_blank" rel="noopener noreferrer" className='proj-button'>View Project</a>
                            </div>
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
