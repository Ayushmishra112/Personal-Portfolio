import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pro1 from "../assets/img/pro1.png";
import pro2 from "../assets/img/pro2.png";
import pro3 from "../assets/img/pro3.png";
import pro4 from "../assets/img/pro4.png";
import pro5 from "../assets/img/pro5.png";
import pro6 from "../assets/img/pro6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Twitter Application",
      description: "MERN Stack, Responsive Web Design",
      imgUrl: pro1,
    },
    {
      title: "Color detector",
      description: "python3 with the help of cv2 & pandas",
      imgUrl: pro2,
    },
    {
      title: "Snake game",
      description: "python 3",
      imgUrl: pro3,
    },
    {
      title: "Health hub",
      description: "Custom Health chatbot configured + html, css, javascript",
      imgUrl: pro4,
    },
    {
      title: "Code breaker",
      description: "Coding learning site",
      imgUrl: pro5,
    },
    {
      title: "Stock market prediction using LSTM model",
      description: "python 3, pandas, LSTM",
      imgUrl: pro6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Developed a shopping cart website with CI/CD integration using Git, Jenkins, AWS, Docker, and TypeScript. Created the Expressicon website with React.js and Vite, focusing on responsive design and fast data flow. Designed a personal portfolio website with dynamic components using React.js, HTML, CSS, and JavaScript.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
