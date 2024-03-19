import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// Importa tu imagen de pastel si tienes una, o usa un ícono de Font Awesome como ejemplo.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Container className="text-center">
      <Row className="my-4">
        <Col>
          <h1>Bienvenido a Happy Cake</h1>
          <p className="lead">El lugar de los pasteles felices</p>
          <div className="my-4">
            <FontAwesomeIcon icon={faBirthdayCake} size="6x" className="text-danger" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
