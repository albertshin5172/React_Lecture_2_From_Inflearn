import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Community</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              as={Link}
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link
              as={Link}
              to="/upload"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Upload
            </Link>
            <Link
              as={Link}
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     width: "100%",
    //   }}
    // >
    //   <h1>Hello, React!</h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       width: "50%",
    //     }}
    //   >
    //     <Link to="/">Home</Link>
    //     <Link to="/upload">Upload</Link>
    //     <Link to="/list">List</Link>
    //   </div>
    // </div>
  );
}

export default Heading;
