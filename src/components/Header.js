/* eslint-disable no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Navbar, Nav, Stack, Image, Dropdown } from "react-bootstrap";
import logo from "../logo.webp";
import { Link } from "react-router-dom";
import CustomContainer from "../components/CustomContainer";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/aboutus",
  },
  {
    title: "Media",
    path: "/media",
    dropdown: [
      { title: "Sermons", path: "/sermons" },
      { title: "Songs", path: "/songs" },
      { title: "Videos", path: "/videos" },
      { title: "Pictures", path: "/pictures" },
      { title: "Member Pictures", path: "/member-pictures" },
    ],
  },
  {
    title: "News & Events",
    path: "/newsevents",
  },
  {
    title: "Visit Us",
    path: "/visitus",
  },
  {
    title: "Links",
    path: "/links",
  },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false); // State to control the navbar collapse


  return (
    <header>
      <Stack as="div" className="text-center p-4">
        <Stack as="h2" className="ff-sour fw-medium fs-3 mb-md-2">
          HOUSTON GHANAIAN SEVENTH~DAY ADVENTIST
        </Stack>
        <Stack as="h4" className="ff-lato fw-light fs-5 mb-0">
          Lifting up Christ in our community...
        </Stack>
      </Stack>
      <CustomContainer sectionClass="bg-dark">
        <Navbar
          expand="md"
          className="shadow-sm py-4 py-2 w-100"
          expanded={expanded} // Control expanded state
        >
          <Stack className="d-flex flex-row justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/" className="d-inline-block me-0 p-0">
              <Image
                src={logo}
                alt="Church Logo"
                width="100%"
                height="100%"
                loading="lazy"
                className="d-inline-block align-top site-logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="navbar-nav"
              onClick={() => setExpanded(!expanded)} // Toggle the state
            />
          </Stack>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto gap-4 py-4 py-md-1">
              {navLinks.map((link, index) => (
                <Stack as="div" className="position-relative" key={index}>
                  {!link.dropdown ? (
                    <Nav.Link
                      as={Link}
                      className="ff-lato fw-medium fs-5 text-white p-0 text-capitalize"
                      to={link.path}
                      onClick={() => setExpanded(false)} // Close the navbar on click
                    >
                      {link.title}
                    </Nav.Link>
                  ) : (
                    <Dropdown>
                      <Dropdown.Toggle
                        id={`dropdown-${index}`}
                        className="p-0 border-0 bg-transparent d-flex align-items-center rounded-0"
                      >
                        <Stack
                          as="a"
                          href={link.path}
                          className="ff-lato fw-medium fs-5 text-white text-capitalize text-decoration-none"
                        >
                          {link.title}
                        </Stack>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="border-0 rounded-0 bg-white">
                        {link.dropdown.map((dropdownLink, dropdownIndex) => (
                          <Dropdown.Item
                            key={dropdownIndex}
                            as={Link}
                            className="ff-lato fw-medium fs-6 text-black p-0 text-capitalize p-2 px-3"
                            to={dropdownLink.path}
                            onClick={() => setExpanded(false)} // Close the navbar on click
                          >
                            {dropdownLink.title}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </Stack>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </CustomContainer>
    </header>
  );
};

export default Header;
