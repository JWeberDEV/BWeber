import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Footer() {
  return (
    <>
      <footer>
        <Container fluid className="bg-dark-bw">
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col xs={6} lg={6} md={6} className="ps-7">
              <p className="text-white" style={{ fontSize: "1.5rem" }}>
                BWeber
              </p>
              <p className="text-secondary">
                Transformando o mercado imobiliário <br /> paraguaio através da
                excelência digital.
              </p>
            </Col>
            <Col xs={6} lg={6} md={6}>
              <Nav
                className="d-flex flex-row justify-content-end gap-3 text-secondary"
                navbar
              >
                <NavItem>
                  <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Serviços
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">Contato</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} lg={12} md={12} className="text-center">
              <div className="text-secondary">
                <hr />
              </div>
              <p className="text-secondary" style={{ fontSize: "1rem" }}>
                <strong>
                  BWeber Digital. Transformação Digital Imobiliária. <br />©
                  2026 BWeber. Todos os direitos reservados.
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
