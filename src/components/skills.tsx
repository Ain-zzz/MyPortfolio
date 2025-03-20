// import React from "react";
// import { Container, ListGroup } from "react-bootstrap";

// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="section">
//       <Container>
//         <h2>My Skills</h2>
//         <ListGroup horizontal className="justify-content-center">
//           <ListGroup.Item>React</ListGroup.Item>
//           <ListGroup.Item>TypeScript</ListGroup.Item>
//           <ListGroup.Item>Bootstrap</ListGroup.Item>
//         </ListGroup>
//       </Container>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">My Skills</h2>
            <p className="text-muted">Technologies I have experience with</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <ListGroup horizontal className="d-flex flex-wrap justify-content-center">
              <ListGroup.Item className="px-4 py-2 border-0 shadow-sm">React</ListGroup.Item>
              <ListGroup.Item className="px-4 py-2 border-0 shadow-sm">TypeScript</ListGroup.Item>
              <ListGroup.Item className="px-4 py-2 border-0 shadow-sm">Bootstrap</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
