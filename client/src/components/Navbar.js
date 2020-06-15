import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

const navigationConfig = {
  client: [
    { label: "Create Care Request", link: "/new-care-request" },
    { label: "Open Care Requests", link: "/open-care-requests" },
  ],
  careGiver: [{ label: "Open Care Requests", link: "/open-care-requests" }],
};

function Menu() {
  const user = useSelector((state) => state.user);

  if (!user) {
    return null;
  }

  const config = navigationConfig[user];

  const menu = config.map((item, index) => (
    <Link key={index} to={`${item.link}`} className="nav-link" role="button">
      {item.label}
    </Link>
  ));

  return (
    <Navbar className="bg" variant="dark" expand="lg">
      <Nav className="mr-auto white">{menu}</Nav>
    </Navbar>
  );
}

export default Menu;
