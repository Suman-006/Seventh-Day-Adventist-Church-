import React from "react";
import CustomContainer from "../components/CustomContainer";
import { Card, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Media = () => {
  const FeaturedData = [
    {
      id: 1,
      src: require("../assets/image/media-item-1.webp"),
      alt: "Image One",
      imgTitle: "Image One",
      mainTitle: "Community Outreach ",
      content:
        "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit",
      anchorText: "call us",
      anchorUrl: "/visitus",
    },
    {
      id: 2,
      src: require("../assets/image/media-item-2.webp"),
      alt: "Image Two",
      ImgTitle: "Image Two",
      mainTitle: "Our Mission",
      content:
        "A few seasoned Adventists think of Sabbath School as a place where they come to spar and debate with their fellow Adventist friends about the 144,000 being a symbolic or literal number, or whether Jesus came with a pre-lapsarian nature or post-lapsarian nature. However, that is not the purpose of Sabbath School. The purpose of Sabbath school is to introduce people to Jesus. The Sabbath school should be one of the greatest instrumentalities, and the most effectual, in bringing souls to Christ. Click here to access weekly sabbath school podcasts. Click here to access pdf files of the Sabbath School Bible Study Guide.",
      anchorText: "Sabbath School Quarterlies",
      anchorUrl: "http://www.absg.adventist.org/Standard.htm",
    },
    {
      id: 3,
      src: require("../assets/image/media-item-3.webp"),
      alt: "Image Three",
      ImgTitle: "Image Three",
      mainTitle: "Our Heritage",
      content:
        "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus. Do not quench the Spirit. Do not treat prophecies with contempt but test them all; hold on to what is good, reject every kind of evil.",
      anchorText: "prayer request",
      anchorUrl: "https://www.houstonghanasda.org/visit_us",
    },
  ];
  return (
    <>
      {/* Featured Section four cards   */}
      <CustomContainer
        sectionClass="media-main-section"
        containerClass="py-4 py-md-5"
      >
        <Stack as="h2" className="ff-sour fw-medium fs-1 mb-2">
          Ministries
        </Stack>
        <Stack as="h4" className="ff-lato fw-bold fs-5 text-black mb-0">
          Houston Ghanaian SDA Church is very active in the Ghanaian Immigrant
          Community at the Southwest side of Houston, TX.
        </Stack>
        <Row className="row-gap-3 mt-4">
          {FeaturedData.map((data) => (
            <Col sm={6} lg={4} className="d-flex" key={data.id}>
              <Card className="feature-card">
                <div className="light-overlay">
                  <Card.Img
                    src={data.src}
                    alt={data.alt}
                    title={data.imgTitle}
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="p-3 px-0 px-md-2 d-flex flex-column justify-content-center">
                  <Stack>
                    <Card.Title
                      as="h4"
                      className="ff-lato fw-bold fs-5 text-black mb-2"
                    >
                      {data.mainTitle}
                    </Card.Title>
                    <Card.Text
                      as="p"
                      className="ff-lato fw-normal fs-6 text-secondary mb-3"
                    >
                      {data.content}
                    </Card.Text>
                  </Stack>
                  <Link
                    to={data.anchorUrl}
                    className="feature-btn w-100 d-block text-center p-2 text-capitalize ff-lato fw-semibold fs-6 text-black"
                  >
                    {data.anchorText}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </>
  );
};

export default Media;
