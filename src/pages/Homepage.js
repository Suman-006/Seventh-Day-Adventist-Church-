import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import CustomContainer from "../components/CustomContainer";
import {Card, Col, Image, Row, Stack} from "react-bootstrap";
import { Link } from "react-router-dom";
import contactSupportImg from "../assets/image/contact-support.webp";
import upcomingEvent1 from "../assets/image/up-event-1.jpg";
import upcomingEvent2 from "../assets/image/up-event-2.jpg";
import pastEvent1 from "../assets/image/past-event-1.jpg";
import pastEvent2 from "../assets/image/past-event-2.jpg";
import pastEvent3 from "../assets/image/past-event-3.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// Slides
const slides = [
  {
    src: require("../assets/image/slide-item1.jpg"),
    alt: "Image One",
    imgTitle: "Image One",
  },
  {
    src: require("../assets/image/slide-item2.jpg"),
    alt: "Image Two",
    ImgTitle: "Image Two",
  },
];
const FeaturedData = [
  {
    id: 1,
    src: require("../assets/image/welcome.jpg"),
    alt: "Image One",
    imgTitle: "Image One",
    mainTitle: "Welcome",
    content:
      "The Houston Ghanaian SDA Church would like to extend a hearty welcome to you and your family for visiting with us on this online page. Thank you so much for taking a minute of your busy day and schedule to look us up. Hope this will not be the last time you visit this site as we will continue to share Christ and update you on all future events at the local church as well as other Ghanaian Seventh - day Adventist communities throughout North America. AKWAABA",
    anchorText: "read more",
    anchorUrl: "/aboutUs",
  },
  {
    id: 2,
    src: require("../assets/image/mission.jpg"),
    alt: "Image Two",
    ImgTitle: "Image Two",
    mainTitle: "Our Mission",
    content:
      "Houston Ghanaian SDA Church is a group that falls under the world wide Seventh-Day Adventist Church to share the advent message of Jesus Christ, the Son of the living God with other believers in Ghanaian communities in the Houston Metropolis. In our effort to spread the love of Jesus it is our mission to lift Christ in our community by reaching out to brothers and sisters of Seventh - day Adventist background who are searching for a church home.",
    anchorText: "read more",
    anchorUrl: "/aboutUs",
  },
  {
    id: 3,
    src: require("../assets/image/heritage.jpg"),
    alt: "Image Three",
    ImgTitle: "Image Three",
    mainTitle: "Our Heritage",
    content:
      "Our church offers a traditional Ghanaian Adventist worship style blended with an American stint.",
    anchorText: "read more",
    anchorUrl: "/aboutUs",
  },
  {
    id: 4,
    src: require("../assets/image/benefits.jpg"),
    alt: "Image Three",
    ImgTitle: "Image Three",
    mainTitle: "Fundamental Beliefs",
    content:
      "God is love, power, and splendor—and God is a mystery. His ways are far beyond us, but He still reaches out to us. God is infinite yet intimate, three yet one, all-knowing yet all-forgiving.",
    anchorText: "read more",
    anchorUrl: "/aboutUs",
  },
];
// get header height and add style on temp class

const Homepage = () => {
  return (
    <>
      {/* carasoul section */}
      <Carousel className="hero-slider">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={3000} className="light-overlay">
            <img
              className="d-block w-100 h-100"
              src={slide.src}
              alt={slide.alt}
              title={slide.imgTitle}
              style={{ objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Featured Section four cards   */}
      <CustomContainer
        sectionClass="feature-section py-4 py-md-5"
      >
        <Row className="row-gap-3 justify-content-center">
          {FeaturedData.map((data) => (
            <Col sm={6} lg={4} xl={3} className="d-flex" key={data.id}>
              <Card className="feature-card">
                <Stack as="div" className="light-overlay">
                  <Card.Img
                    src={data.src}
                    alt={data.alt}
                    title={data.imgTitle}
                    className="object-fit-cover"
                  />
                </Stack>
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

      {/* Events */}
      <CustomContainer
        sectionClass="bg-body-secondary py-4 py-md-5 about-tabs home-tabs"
        fluid
        width="1080px" >
          <Stack as="h1" className="ff-sour fw-medium fs-1 text-black text-center">
                Our Events
            </Stack>
            <Stack as="h4" className="ff-sour fw-medium fs-5 text-black text-center">
              Don’t miss out - Join us at our upcoming events
            </Stack>
          <Tabs defaultActiveKey="uevents" id="fill-tab-example"
              className="d-flex gap-2 ff-lato fw-bold fs-5 text-black w-md-50 mx-auto mt-3"
              fill>
              <Tab eventKey="pevents" title="Past Events">
                <Row className="pt-4 align-items-center justify-content-md-center">
                  <Col md={3} xs={6} className="mb-3 mb-md-0">
                    <Image
                    src={pastEvent1}
                    title="Past Event"
                    alt="Past Event"
                    loading="lazy"
                    className="object-fit-cover w-100 h-100" />
                  </Col>
                  <Col md={3} xs={6} className="mb-3 mb-md-0">
                    <Image
                    src={pastEvent2}
                    title="Past Event"
                    alt="Past Event"
                    loading="lazy"
                    className="object-fit-cover w-100 h-100" />
                  </Col>
                  <Col md={3} xs={6} className="mb-3 mb-md-0">
                    <Image
                    src={pastEvent3}
                    title="Past Event"
                    alt="Past Event"
                    loading="lazy"
                    className="object-fit-cover w-100 h-100" />
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="uevents" title="Upcoming Events">
                <Row className="pt-4 align-items-center justify-content-md-center">
                  <Col md={3} xs={6} className="mb-3 mb-md-0">
                    <Image
                    src={upcomingEvent1}
                    title="Upcoming Event"
                    alt="Upcoming Event"
                    loading="lazy"
                    className="object-fit-cover w-100 h-100" />
                  </Col>
                  <Col md={3} xs={6} className="mb-3 mb-md-0">
                    <Image
                    src={upcomingEvent2}
                    title="Upcoming Event"
                    alt="Upcoming Event"
                    loading="lazy"
                    className="object-fit-cover w-100 h-100" />
                  </Col>
                </Row>
              </Tab>
            </Tabs>

      </CustomContainer>

      {/* customer support */}
      <CustomContainer fluid sectionClass="py-4 py-md-5" width="1080px">
        <Stack as="h2" className="ff-sour fw-medium fs-1 mb-3">
          Next Sabbath's Service
        </Stack>
        <Row className="align-items-center justify-content-center justify-content-lg-between text-center row-gap-4">
          <Col sm={6} lg={3}>
            <Image
              src={contactSupportImg}
              title="Contact Support"
              alt="Contact Support Image"
              width="400"
              height="300"
              loading="lazy"
              className="w-100 h-100"
            />
          </Col>
          <Col sm={6} lg={4}>
            <Stack as="div" className="mb-2">
              <Stack
                as="h2"
                className="ff-sour fw-light fs-3 text-black text-capitalize mb-1"
              >
                Sabbath School
              </Stack>
              <Stack as="h3" className="ff-lato fw-medium fs-6 text-black text-uppercase">
                (9:30 am - 10:45 am)
              </Stack>
            </Stack>
            <Stack as="div" className="mb-2">
              <Stack
                as="h2"
                className="ff-sour fw-light fs-3 text-black text-capitalize mb-1"
              >
                Worship Service
              </Stack>
              <Stack as="h3" className="ff-lato fw-medium fs-6 text-black text-uppercase">
                (11:00 am - 1:00pm)
              </Stack>
            </Stack>
          </Col>
          <Col sm={6} lg={4}>
            <Stack as="div" className="mb-2">
              <Stack
                as="h2"
                className="ff-sour fw-light fs-3 text-black text-capitalize mb-1"
              >
                Address
              </Stack>
              <Stack as="div" className="ff-lato fw-medium fs-6 text-black text-uppercase">
                <p>521 North Sam Houston Pkwy E</p>
                <p>Houston TX 77060</p>
                <p>(2nd Floor)</p>
              </Stack>
            </Stack>
            <Stack as="div" className="mb-2">
              <p className="ff-lato fw-medium fs-6 text-black text-uppercase mb-1">
                <b className="ff-sour">Zoom ID:</b> 675-810-789
              </p>
              <p className="ff-lato fw-medium fs-6 text-black text-uppercase">
                <b className="ff-sour">Code:</b> 749100
              </p>
            </Stack>
          </Col>
        </Row>
      </CustomContainer>
    </>
  );
};

export default Homepage;
