import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./layout.css"
import { Container, Nav, Navbar,NavDropdown, NavLink,Col, Row, } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { Footer } from "./index"

export const Layout = ()=>{
    return <>
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
     <Container>
        <Link to="/" className="navbar-brand">MERN 3PM</Link>
     <Navbar.Toggle/>
     <Navbar.Collapse>
        <Nav className="me-auto">
            <Nav.Item>
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </Nav.Item>
        </Nav>
        <Nav>
            <Nav.Item>
                <NavDropdown title="Demo User" align="end">
                    <Link to="/profile" className="dropdown-item">
                        Profile
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/logout" className="dropdown-item">
                        Logout
                    </Link>
                </NavDropdown>
            </Nav.Item>
        </Nav>
     </Navbar.Collapse>
     </Container>

    </Navbar>

    <Container>
        <Row>
        <Col className="bg-white my-3 py-3 rounded-3 shadow-sm" >
              <Row>
                <Col>
                  <Outlet />
                </Col>
              </Row>
            </Col>
        </Row>
    </Container>
    
    <Footer />
    </>
}