import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import X from "../assets/img/X.svg";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";




const NavBar = () => {
    const [activeLink, setAtiveLink] = useState('home');
    const  [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setAtiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        
        <Navbar.Brand className='hope' href="#home">
            Hope-jr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>About-Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contact-Me</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://twitter.com/B_ksnightmare'><img src={X} alt=''/></a>
                <a href='https://github.com/Hopejrajoku'><img src={GitHub} alt=''/></a>
                <a href='https://www.linkedin.com/in/hope-ajoku-112599273/'><img src={LinkedIn} alt=''/></a>
            </div>
            <button className='vvd' onClick={() => console.log('contact')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container> 
      
    </Navbar>
  )
}

export default NavBar
