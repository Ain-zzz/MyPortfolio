// import React from "react";
// import { Container, Form, Button } from "react-bootstrap";

// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="section">
//       <Container>
//         <h2>Contact Me</h2>
//         <Form className="contact-form">
//           <Form.Group>
//             <Form.Control type="text" placeholder="Your Name" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Control type="email" placeholder="Your Email" />
//           </Form.Group>
//           <Form.Group>
//             <Form.Control as="textarea" rows={3} placeholder="Message" />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Send
//           </Button>
//         </Form>
//       </Container>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Contact Me</h2>
            <p className="text-muted">Feel free to reach out for any inquiries or collaborations.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form className="p-4 border rounded bg-white shadow-sm">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
