import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import CustomContainer from '../components/CustomContainer';
import { Stack } from 'react-bootstrap';
import GoogleMap from '../components/GoogleMap';

function VisitUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <CustomContainer sectionClass="contact-main-form py-4 py-md-5 justify-content-xl-center" containerClass="d-flex flex-column gap-1 gap-md-4">
            <Stack as="h2" className="ff-sour fw-medium fs-1 mb-3 text-lg-center">
                Contact Us
            </Stack>
            <Row className='row-gap-4 align-items-lg-center align-items-xl-stretch'>
                <Col lg={6} xl={4} className='d-flex flex-column gap-3'>
                    <Stack as="h3" className='ff-lato fw-medium fs-5 text-black text-uppercase' style={{ flex: "unset" }}>
                        Send us a message or prayer request.
                    </Stack>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                        <Row className="row-gap-3 row-gap-md-1">
                            {/* Name Field */}
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label className="ff-sour fw-bold fs-6 text-black text-uppercase">Name *</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control className='rounded-0 border-black ff-lato fw-medium fs-6 text-black'
                                        required
                                        type="text"
                                        autoComplete="name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please type a valid name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label className="ff-sour fw-bold fs-6 text-black text-uppercase">Email *</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control className='rounded-0 border-black ff-lato fw-medium fs-6 text-black'
                                        required
                                        type="email"
                                        autoComplete="email"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please type a valid email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            {/* Phone Field */}
                            <Form.Group as={Col} md="12" controlId="phoneNumber">
                                <Form.Label className="ff-sour fw-bold fs-6 text-black text-uppercase">Phone</Form.Label>
                                <Form.Control
                                    type="number"
                                    aria-describedby="inputGroupPrepend"
                                    autoComplete="tel" className='rounded-0 border-black ff-lato fw-medium fs-6 text-black'

                                />
                            </Form.Group>

                            {/* Subject Field */}
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label className="ff-sour fw-bold fs-6 text-black text-uppercase">Subject *</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        aria-describedby="inputGroupPrepend"
                                        autoComplete="off" className='rounded-0 border-black ff-lato fw-medium fs-6 text-black'
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a valid subject.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Stack as={Col} md="12">
                                <Form.Control className='rounded-0 border-black ff-lato fw-medium fs-6 text-black'
                                    as="textarea"
                                    placeholder="Message/Prayer request"
                                    style={{ height: '100px' }}
                                />
                            </Stack>
                        </Row>

                        <Button type="submit" className='dark-btn ff-lato fw-medium fs-6 text-black text-capitalize'>send message</Button>
                    </Form>
                </Col>
                <Col lg={6} xl={4} className='text-lg-center'>
                    <Stack as="h3" className='ff-lato fw-medium fs-5 text-black text-uppercase'>
                        Houston Ghanaian SDA Church
                    </Stack>
                    <Stack as="div" className="my-2 gap-2">
                        <Stack
                            as="h2"
                            className="ff-sour fw-light fs-3 text-black text-capitalize mb-1"
                        >
                            Address
                        </Stack>
                        <Stack as="div" className="ff-lato fw-medium fs-6 text-black text-uppercase">
                            <p>Maritime Center</p>
                            <p>521 North Sam Houston Pkwy E</p>
                            <p>Houston TX 77060</p>
                            <p>(2nd Floor)1</p>
                        </Stack>
                        <Stack as="div" className="gap-1">
                            <Stack as="p" className="ff-lato fw-medium fs-6 text-black flex-row gap-1 mx-lg-auto" style={{ width: "max-content" }}>
                                <Stack as="b" className="ff-sour text-uppercase">Email:</Stack> <Stack as="a" href='mailto:Pastor@houstonGhanaSDA.org' className='text-black'>Pastor@houstonGhanaSDA.org</Stack>
                            </Stack>
                            <Stack as="p" className="ff-lato fw-medium fs-6 text-black flex-row gap-1 mx-lg-auto" style={{ width: "max-content" }}>
                                <Stack as="b" className="ff-sour text-uppercase">Phone:</Stack> Elder Daniel F. : <Stack as="a" href='tel:832-771-8772' className='text-black'>
                                    832-771-8772
                                </Stack>
                            </Stack>
                            <Stack as="p" className="ff-lato fw-medium fs-6 text-black flex-row gap-1 mx-lg-auto" style={{ width: "max-content" }}>
                                <Stack as="b" className="ff-sour text-uppercase">Church Clerk:</Stack> Sist. Vera B: <Stack as="a" href='tel:240-486-3034' className='text-black'>
                                    240-486-3034
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Col>
                <Col lg={12} xl={4}>
                    <GoogleMap />
                </Col>
            </Row>
        </CustomContainer>
    );
}

export default VisitUp;