import { Container, Navbar as Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faAddressBook,faCakeCandles} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Nav bg="danger" variant="dark">
      <Container className="d-flex justify-content space-around">
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faHouse} className="me-2"/>
            Home
          </Link>

          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <FontAwesomeIcon icon={faAddressBook} className="me-2 text-warning" />
            Contacto
          </Link>
        </div>

        <Nav.Brand>
          Happy Cake
          <FontAwesomeIcon icon={faCakeCandles} className="ms-2" />
        </Nav.Brand>
      </Container>
    </Nav>
  );
};

export default Navbar;
