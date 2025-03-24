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

// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="py-5 bg-light">
//       <Container>
//         <Row className="text-center mb-4">
//           <Col>
//             <h2 className="fw-bold">My Projects</h2>
//             <p className="text-muted">Here are some of the projects I have worked on.</p>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           {[
//             { title: "Fitness Tracking App", img: "src/components/Pictures/fitness.png" },
//             { title: "Chat Application", img: "src/components/Pictures/Reactjs-Chat-UI-Beatutiful-Template-Demo-2-1024x492.png" },
//           ].map((project, index) => (
//             <Col key={index} md={6} lg={4} className="mb-4">
//               <Card className="shadow-sm border-0">
//                 <Card.Img variant="top" src={project.img} />
//                 <Card.Body className="text-center">
//                   <Card.Title className="fw-bold">{project.title}</Card.Title>
//                   <Card.Text>This mobile app UI is designed for tracking fitness activities.It includes login/signup screens, a daily progress tracker, and an exercise entry form. The app allows users to log activities, track workout durations, and monitor calorie burn. The design uses soft colors with a clean and user-friendly layout.</Card.Text>
//                   <Button variant="primary">View</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Fitness Tracking App",
    img: "src/components/Pictures/fitness.png",
    description:
      "This mobile app UI is designed for tracking fitness activities. It includes login/signup screens, a daily progress tracker, and an exercise entry form. The app allows users to log activities, track workout durations, and monitor calorie burn. The design uses soft colors with a clean and user-friendly layout.",
  },
  {
    title: "Chat Application",
    img: "src/components/Pictures/Reactjs-Chat-UI-Beatutiful-Template-Demo-2-1024x492.png",
    description:
      "This chat application UI is designed for real-time communication. It includes user profiles, online status indicators, group chat functionality, and message interactions. The app features a sleek and modern design with a dark theme for improved readability and user experience.",
  },
];

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
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={project.img} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
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
