import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import X from "../assets/img/X.svg";
import GitHub from "../assets/img/GitHub.svg";
import LinkedIn from "../assets/img/LinkedIn.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2 style={{ fontWeight: 700, fontSize: 60, marginTop: 20}}>HopejR</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-5">
              <a href="#"><img src={X} alt="Icon" /></a>
              <a href="https://github.com/Hopejrajoku"><img src={GitHub} alt="Icon" /></a>
              <a href="#"><img src={LinkedIn} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}