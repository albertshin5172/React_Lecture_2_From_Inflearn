import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

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
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="justify-content-end">
          {user.accessToken ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <div
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => LogoutHandler()}
              >
                LOGOUT
              </div>
              <div>
                <Link
                  to="/MyPage"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  MyPage
                </Link>
              </div>
            </div>
          ) : (
            <Link
              as={Link}
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                //marginRight: "10px",
              }}
            >
              Login
            </Link>
          )}
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
