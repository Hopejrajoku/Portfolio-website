import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const buttonStyle = {  
  color: "#121212",
  backgroundColor: "#f5f5f4",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
};

const buttonHoverStyle = { 
  border: "1px dashed hsl(0, 5.00%, 92.20%)",
  color: "#eceaea",
  backgroundColor: "#121212",
  cursor: "pointer",
  transition: "0.3s ease-in-out",
};


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="d-block"
      >
        <Card className="shadow-lg border-0 rounded-3 overflow-hidden" >
          <div className="position-relative w-100" style={{ height: "230px" }} >
            <Card.Img
              src={image}
              alt={name}
              className="w-100 h-100 object-fit rounded-top"
              style={{ borderRadius: "1rem 1rem 0rem 0rem",  }}
            />
          </div>

          <Card.Body
            style={{ backgroundColor: "#121212", border: "1px solid rgba(236, 234, 234, 0.08)"}}
          >
            <Card.Title className="fw-bold fs-5"
            style={{ color: "#eceaea" }}
             >{name}</Card.Title>
            <Card.Text 
            style={{ color: "#eceaea" }}
            >{description}</Card.Text>

            <div className="d-flex flex-wrap gap-2 text-[#eceaea]">
              {tags.map((tag) => (
                <span key={`${name}-${tag.name}`} className={`badge ${tag.color}`} style={{ color: "#eceaea" }}>
                  #{tag.name}
                </span>
              ))}
            </div>

            <Button 
              href={source_code_link} 
              target="_blank" 
              variant="primary" 
              className="mt-3 w-100"
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}  
            >
              View Project
            </Button>
          </Card.Body>
        </Card>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <Container id="projects" className="py-5">
      <motion.div variants={textVariant()}>        
        <h2 className="fw-bold">Projects</h2>
      </motion.div>

      <Row className="mt-3">
        <Col md={10} lg={8} className="mx-auto">
          <motion.p 
            variants={fadeIn("", "", 0.1, 1)} 
            className=" fs-6"
          >
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </motion.p>
        </Col>
      </Row>

      <Row className="mt-5 g-4">
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4}>
            <ProjectCard index={index} {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SectionWrapper(Works, "");
