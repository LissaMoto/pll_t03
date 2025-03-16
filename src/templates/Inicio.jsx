import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextoLogin } from "../App";

export default function Inicio(props) {
  const contextoLogin = useContext(ContextoLogin);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="" as={Link} to="/">Início</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item href="" as={Link} to="/pets">
                Pacientes
              </NavDropdown.Item>


                <NavDropdown.Item href="" as={Link} to="/medicamento"
                 className="no-link-style">
                  Medicamento
                </NavDropdown.Item>


              <NavDropdown.Item href="" as={Link} to="/veterinariostecnicos"
                className="no-link-style">
                Veterinarios/Tecnicos
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand
          href=""
          onClick={() => {
            contextoLogin.setDadosLogin({
              usuario: "",
              logado: false,
            });
          }}
        >
          Logout
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
