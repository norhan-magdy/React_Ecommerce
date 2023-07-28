import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "./images/store.png";
import Image from "react-bootstrap/esm/Image";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);

  const main = document.querySelector("HTML");
  const [theme, setTheme] = useState(
    window.localStorage.getItem("data-bs-theme")
      ? window.localStorage.getItem("data-bs-theme")
      : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    window.localStorage.setItem("cartLength", JSON.stringify(cartLength));
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
    window.localStorage.setItem("data-bs-theme", theme);
    main.setAttribute("data-bs-theme", theme);
  }, [cart, theme]);

  return (
    <Navbar
      data-bs-theme={theme}
      bg={theme}
      collapseOnSelect
      expand="sm"
      className="shadow sticky-top"
    >
      <Container>
        <Link to="/" className="navbar-brand">
          {<Image src={store}></Image>}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="text-center not-found-container"
        >
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Products
            </Link>
            <Link to="features" className="nav-link">
              Features
            </Link>
            <Link to="about" className="nav-link">
              About
            </Link>
            <Link to="cart" className="nav-link position-relative">
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
              {cartLength > 0 && (
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {cartLength}
                </span>
              )}
            </Link>
            <Button
              onClick={switchTheme}
              variant={
                theme === "light" ? "outline-secondary" : "outline-light"
              }
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                size="xl"
              />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavbar;
