import React from "react";
import { Container, Stack } from "react-bootstrap";

const CustomContainer = ({
  children,
  sectionClass,
  containerClass,
  width = "1440px",
}) => {
  return (
    <Stack as="section" className={`w-100 flex-grow-1 d-flex align-items-center ${sectionClass}`}>
      <Container style={{ maxWidth: width }} className={containerClass}>
        {children}
      </Container>
    </Stack>
  );
};

export default CustomContainer;
