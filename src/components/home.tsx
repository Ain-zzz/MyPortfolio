import React from "react";
import { Container, Button } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <section 
      id="home"
      className="d-flex align-items-center justify-content-center text-center vh-100 bg-light"
    >
      <Container>
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">
          I'm a passionate IT student specializing in system integration.
        </p>
        <Button variant="primary" href="#projects" size="lg" className="mt-3">
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default Home;
