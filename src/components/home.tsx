import React from "react";
import { Container, Button } from "react-bootstrap";


const home: React.FC = () => {
  return (
    <section 
      id="home"
      className="d-flex align-items-center justify-content-center text-center vh-100 bg-light"
    >
      <Container>
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">
        Welcome to my portfolio! I am an IT student passionate about system integration, architecture, and software development. This portfolio showcases my projects, including web and mobile applications designed with modern frameworks like React. Each project demonstrates my skills in UI/UX design, functionality, and seamless user interaction.

        </p>
        <Button variant="primary" href="#projects" size="lg" className="mt-3">
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default home;

