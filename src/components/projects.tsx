// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="section">
//       <Container>
//         <h2>My Projects</h2>
//         <Row>
//           <Col md={4}>
//             <Card className="project-card">
//               <Card.Img variant="top" src="https://via.placeholder.com/300" />
//               <Card.Body>
//                 <Card.Title>Project 1</Card.Title>
//                 <Card.Text>A brief description of the project.</Card.Text>
//                 <Button variant="primary">View</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="project-card">
//               <Card.Img variant="top" src="https://via.placeholder.com/300" />
//               <Card.Body>
//                 <Card.Title>Project 2</Card.Title>
//                 <Card.Text>A brief description of the project.</Card.Text>
//                 <Button variant="primary">View</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">My Projects</h2>
            <p className="text-muted">Here are some of the projects I have worked on.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {[
            { title: "Project 1", img: "https://via.placeholder.com/300" },
            { title: "Project 2", img: "https://via.placeholder.com/300" },
          ].map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={project.img} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>A brief description of the project.</Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
