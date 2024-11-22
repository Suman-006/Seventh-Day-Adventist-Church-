import React from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import CustomContainer from "../components/CustomContainer";

const Videos = () => {
    const churchVideos = [
        {
            id: 1,
            videoUrl: require("../assets/image/event-video.mp4"),
            videoTitle: "HOUSTON GHANAIAN SDA CHURCH"
        },
    ];

    return (
        <CustomContainer
            fluid
            sectionClass="church-videos"
            containerClass="py-4 py-md-5"
        >
            <Stack as="h2" className="ff-sour fw-medium fs-1 mb-3">
                The Word Through Video
            </Stack>

            <Row className="row-gap-3 mt-3">
                {churchVideos.map((data) => (
                    <Col sm={6} className="d-flex" key={data.id}>
                        <Card className="w-100 border border-dark rounded-0">
                            <Card.Body className="p-2 d-flex">
                                <video src={data.videoUrl} title={data.videoTitle} className="h-100 w-100 object-fit-cover" controls></video>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CustomContainer>
    );
};

export default Videos;
