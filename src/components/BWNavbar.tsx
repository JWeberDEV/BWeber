import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function BWNavbar() {
  return (
    <Navbar className="bg-dark-bw" dark>
      <NavbarBrand href="/">BWeber</NavbarBrand>
      <Nav className="d-flex flex-row gap-3" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/services">
            Serviços
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contato</NavLink>
        </NavItem>
      </Nav>
      <button className="btn btn-primary"> Whatsapp</button>
    </Navbar>
  );
}
