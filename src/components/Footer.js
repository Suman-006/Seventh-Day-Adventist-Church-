import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import CustomContainer from "./CustomContainer";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <CustomContainer>
        <Row className="align-items-center row-gap-4">
          {/* copyright and mailto */}
          <Col sm={6} xl={4}>
            <Stack as="h5" className="ff-lato fw-light fs-3 text-white text-capitalize mb-1">
              © 2023 Houston Ghanaian SDA Church
            </Stack>
            <Stack as="a"
              href="mailto:Pastor@houstonghanasda.org"
              className="ff-sour fw-medium fs-6 text-white text-lowercase"
            >
              Pastor@houstonghanasda.org
            </Stack>
          </Col>

          {/* outside and social media */}
          <Col sm={6} xl={4} className="text-sm-center social-medias">
            <Stack as="h2" className="ff-sour fw-light fs-3 text-white text-capitalize mb-1">
              Social Media
            </Stack>
            {/* <Stack as="a"
              className="ff-lato fw-bold fs-4 text-white text-capitalize mb-1 action-btn p-2 px-5 px-md-4 border border-white text-decoration-none w-75 mx-auto d-inline-block d-sm-block"
              href="https://editor.wix.com/html/editor/web/renderer/edit/11fb1a82-4c28-4041-952e-1d3f08c1d6ba?metaSiteId=e584ace6-446e-4507-b3bb-cc596bc7361e&editorSessionId=6ee61330-e25a-4461-8316-50491a47d158"
            >
              Webmaster Login
            </Stack> */}
            {/* Social Media Icons */}
            <Stack as="div" className="d-flex flex-row justify-content-sm-center mt-3">
              <Stack as="a"
                href="https://www.facebook.com/houstonghanaiansda"
                className="text-light me-3"
                aria-label="Facebook"
                style={{ flex: "unset" }}
              >
                <FaFacebook size={24} />
              </Stack>
              <Stack as="a"
                href="http://youtu.be/IDCf1p0LOnc"
                className="text-light"
                aria-label="Instagram"
                style={{ flex: "unset" }}
              >
                <FaInstagram size={24} />
              </Stack>
            </Stack>
          </Col>

          {/* Contact Information */}
          <Col sm={6} xl={4} className="text-xl-end">
            <Stack as="div" className="mb-2">
              <Stack as="h2" className="ff-sour fw-light fs-3 text-white text-capitalize mb-1">
                Address
              </Stack>
              <Stack as="div" className="ff-lato fw-medium fs-6 text-white text-uppercase">
                <Stack as="p">521 North Sam Houston Pkwy E</Stack>
                <Stack as="p">Houston TX 77060</Stack>
                <Stack as="p">(2nd Floor)</Stack>
              </Stack>
            </Stack>
            <Stack as="div" className="gap-1">
              <Stack as="p" className="ff-lato fw-medium fs-6 text-white text-uppercase flex-row gap-1 ms-xl-auto" style={{ width: "max-content" }}>
                <Stack as="b" className="ff-sour">Zoom ID:</Stack> 675-810-789
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-white text-uppercase flex-row gap-1 ms-xl-auto" style={{ width: "max-content" }}>
                <Stack as="b" className="ff-sour">Code:</Stack> 749100
              </Stack>
            </Stack>
          </Col>
        </Row>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
