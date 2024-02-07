import React from 'react'
import { Col, Container, Row, Tab , Nav} from 'react-bootstrap';
//import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import coincept1 from "../assets/img/coincept1.svg";
import comm from "../assets/img/comm.svg";
import TrackVisibility from 'react-on-screen';



const Projects = () => {

  
      


  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div classsName={isVisible ? "animate__animated animate__bounce" : ""}>
                <h2>Projects</h2>
                <p>Here are the list of projects I have been able to work on in my one year experience as a self taught developer, I intend to gain more experince so I keep building.</p>
                  </div>}
                </TrackVisibility>
                <Tab.Container id='projects-tab' defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills justify-content-center align-items-center" id="pills-tab">
                 <Nav.Item>
                   <Nav.Link eventKey="first">Tab one</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="second">Tab two</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Nav.Link eventKey="third">Tab three</Nav.Link>
                 </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row className='Poject-row'>
                            <Col sm={6} md={4}>
                            <img src={coincept1} alt='' style={{ marginTop: 40}} />
                            <h4 className='title mt-3'>Crypto Price app</h4>
                            <p>This is a very simple, easy to use Cryptocurrency price tracker app, built with React, ContextAPI, MaterialUI,Firebase and ChartJS</p>
                            <a href='https://coincept.netlify.app/' className='proj-button'>View Project</a>
                            </Col>
                            <br/>
                            <Col sm={6} md={4}  >
                            <img src={comm} alt='' style={{ marginTop: 40}} />
                            <h4 className='title mt-3'>Title</h4>
                            <p>This is a very simple, easy to use Cryptocurrency price tracker app, built with React, ContextAPI, MaterialUI,Firebase and ChartJS</p>
                            <a href='#' className='proj-button'>Ready Soon</a>
                            </Col><br/>
                            <Col sm={6} md={4}>
                            <img src={comm} alt='' style={{ marginTop: 40}} />
                            <h4 className='title mt-3'>Title</h4>
                            <p>This is a very simple, easy to use Cryptocurrency price tracker app, built with React, ContextAPI, MaterialUI,Firebase and ChartJS.</p>
                            <a href='#' className='proj-button'>Ready Soon</a>
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
