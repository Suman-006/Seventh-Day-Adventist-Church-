import React, { useState } from "react";
import { Button, Card, Col, Row, Stack, Toast } from "react-bootstrap";
import CustomContainer from "../components/CustomContainer";
import { FaCopy, FaCheck } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const Sermons = () => {
    const FeaturedData = [
        {
            id: 1,
            src: require("../assets/image/sermons-image-1.jpg"),
            alt: "sermons image",
            imgTitle: "sermons image",
            mainTitle: "Joe Boat",
            mainTitleUrl: "https://soundcloud.com/houston-ghanaian-sda",
            content: `"Be Like Me" - Dr. Alex Clerk (President, PaGAF)`,
            contentUrl: "https://soundcloud.com/houston-ghanaian-sda/dr-clerk-houston-ghana-sda",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
    ];

    const [shareVisibility, setShareVisibility] = useState({});
    const [copied, setCopied] = useState(null);

    const handleShareClick = (id) => {
        setShareVisibility((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleCopyClick = (id, audioUrl) => {
        navigator.clipboard.writeText(audioUrl).then(() => {
            setCopied(id);
            setTimeout(() => setCopied(null), 2000);
        });
    };

    return (
        <CustomContainer fluid sectionClass="sermons-audio" containerClass="py-4 py-md-5">
            <Stack as="h2" className="ff-sour fw-medium fs-1 mb-3">
                Next Sabbath's Service
            </Stack>

            <Row className="row-gap-3 mt-3">
                {FeaturedData.map((data) => (
                    <Col sm={6} lg={4} xl={3} className="d-flex" key={data.id}>
                        <Card className="feature-card w-100">
                            <Stack as="div" className="light-overlay" style={{ flex: "unset" }}>
                                <Card.Img
                                    src={data.src}
                                    alt={data.alt}
                                    title={data.imgTitle}
                                    className="object-fit-cover"
                                    style={{ objectPosition: "top" }}
                                />
                            </Stack>
                            <Card.Body className="p-3 px-0 px-md-2 d-flex flex-column gap-3">
                                <Stack as="div" className="gap-2" style={{ flex: "unset" }}>
                                    <Card.Title
                                        as="h4"
                                        className="ff-lato fw-bold fs-5 text-black"
                                    >
                                        <Stack
                                            as="a"
                                            target="_blank"
                                            href={data.mainTitleUrl}
                                            className="text-black"
                                        >
                                            {data.mainTitle}
                                        </Stack>
                                    </Card.Title>
                                    <Card.Text
                                        as="p"
                                        className="ff-lato fw-normal fs-6 text-secondary"
                                    >
                                        <Stack
                                            as="a"
                                            target="_blank"
                                            href={data.contentUrl}
                                            className="text-black"
                                        >
                                            {data.content}
                                        </Stack>
                                    </Card.Text>
                                </Stack>
                                <Stack as="audio" controls className="w-100" style={{ flex: "unset" }}>
                                    <source src={data.audioUrl} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </Stack>

                                <Stack as="div">
                                    <Button
                                        onClick={() => handleShareClick(data.id)}
                                        style={{
                                            backgroundColor: shareVisibility[data.id] ? "#212529" : "transparent",
                                            color: shareVisibility[data.id] ? "white" : "black",
                                        }}
                                        className="share-btn w-100 d-block text-center p-2 text-capitalize ff-lato fw-semibold fs-6"
                                    >
                                        share audio
                                    </Button>

                                    {shareVisibility[data.id] && (
                                        <Stack as="div" className="position-relative">
                                            <Toast
                                                show={shareVisibility[data.id]}
                                                delay={3000}
                                                autohide
                                                className="border-0 rounded-0 m-0 ms-auto position-absolute top-0 start-0 end-0 mt-1 bg-light"
                                            >
                                                <Toast.Body>
                                                    <Stack
                                                        as="div"
                                                        className="d-flex flex-row justify-content-end align-items-center gap-2"
                                                    >
                                                        <Stack
                                                            as="a"
                                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.audioUrl)}`}
                                                            target="_blank"
                                                            className="text-black"
                                                            style={{ flex: "unset" }}
                                                        >
                                                            <RiFacebookCircleLine size={24} />
                                                        </Stack>
                                                        <Stack
                                                            as="a"
                                                            href={`https://www.instagram.com/?url=${encodeURIComponent(data.audioUrl)}`}
                                                            target="_blank"
                                                            className="text-black"
                                                            style={{ flex: "unset" }}
                                                        >
                                                            <FaInstagram size={24} />
                                                        </Stack>
                                                        <Stack
                                                            as="a"
                                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(data.audioUrl)}`}
                                                            target="_blank"
                                                            className="text-black"
                                                            style={{ flex: "unset" }}
                                                        >
                                                            <LuTwitter size={24} />
                                                        </Stack>
                                                        <Stack
                                                            as="a"
                                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.contentUrl)}&comment=${encodeURIComponent(data.audioUrl)}`}
                                                            target="_blank"
                                                            className="text-black"
                                                            style={{ flex: "unset" }}
                                                        >
                                                            <TbBrandLinkedin size={24} />
                                                        </Stack>
                                                    </Stack>

                                                    <Stack as="div" className="d-flex flex-row align-items-center">
                                                        <Stack
                                                            as="h4"
                                                            className="ff-lato fw-bold fs-6 text-black mt-2 overflow-hidden"
                                                            style={{ textWrap: "nowrap" }}
                                                        >
                                                            {data.audioUrl}
                                                        </Stack>
                                                        <Button
                                                            onClick={() => handleCopyClick(data.id, data.audioUrl)}
                                                            className="p-1 bg-transparent border-0 text-black"
                                                            style={{ width: "max-content" }}
                                                        >
                                                            {copied === data.id ? (
                                                                <FaCheck color="green" />
                                                            ) : (
                                                                <FaCopy />
                                                            )}
                                                        </Button>
                                                    </Stack>
                                                </Toast.Body>
                                            </Toast>
                                        </Stack>
                                    )}
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CustomContainer>
    );
};

export default Sermons;
