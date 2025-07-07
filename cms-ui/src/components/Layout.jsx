import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./layout.css"
import { Container, Nav, Navbar,NavDropdown, NavLink,Col, Row, } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { Footer } from "./index"
import Header from "./Header"

export const Layout = ()=>{
    return <>
    <Header />
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