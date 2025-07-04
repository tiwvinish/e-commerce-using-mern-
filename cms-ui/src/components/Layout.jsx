import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./layout.css"
import { Container, Nav, Navbar,NavDropdown, NavLink,Col, Row, } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Layout = ()=>{
    return <>
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
     <Container>
        <Link to="/" className="navbar-brand">MERN 3PM</Link>
     <Navbar.Toggle/>
     <Navbar.Collapse>
        <Nav className="me-auto">
            <Nav.Item>
                <NavLink to="" className="nav.link">
                    Link
                </NavLink>
            </Nav.Item>
        </Nav>
        <Nav>
            <Nav.Item>
                <NavDropdown title="Demo User" align="end">
                    <link to=""  className="dropdown-item">
                    Item</link>
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
                <h1>Welcome</h1>
                </Col>
              </Row>
            </Col>
        </Row>
    </Container>
    
    </>
}