import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col lg={8} xl={6}>
          <h2 className="text-center mb-4">
            Cuéntanos, ¿en qué te podemos ayudar?
          </h2>

          <Form>
            <Form.Group controlId="Email" className="mb-4 align-items-center">
              <Form.Label className="me-2 mb-0 flex-shrink-0">
                Correo:
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="Descripcion" className="mb-4 align-items-center">
              <Form.Label className="me-2 mb-0">Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit" className="btn-enviar mt-2">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
