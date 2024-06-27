import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo4.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center mt-5 text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ayush-mishra-developer/"><img src={navIcon1} alt="icon" /></a>
                <a href="https://github.com/Ayushmishra112"><img src={navIcon2} alt="icon" /></a>
                <a href="https://www.instagram.com/lluvv.ayush/"><img src={navIcon3} alt="icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
