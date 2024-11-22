import React from 'react';
import CustomContainer from '../components/CustomContainer';
import { Col, Row, Stack } from 'react-bootstrap';

const WebLinks = () => {
    const Affiliations = [
        {
            title: "Affiliations:"
        },
        {
            id: 1,
            content: "General Conference of Seventh-Day Adventists",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 2,
            content: "Texas Conference of Seventh-Day Adventists",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 3,
            content: "Houston International SDA Church",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 4,
            content: "New Life SDA Church, Houston, TX",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 5,
            content: "PaGAF: Pacific Ghanaian Adventists Fellowship",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        }
    ];

    const MediaLinks = [
        {
            title: "Media Links:"
        },
        {
            id: 1,
            content: "SDA Hymnal online",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 2,
            content: "CB Radio: Online Ghanaian Adventist radio station.",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 3,
            content: "Yonkodo Radio",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 4,
            content: "Audio Verse: Click here to access the Bible for free in several versions and languages",
            anchorUrl: "http://www.adventist.org/",
            additionalUrl: "http://www.audiotreasure.com/",
        },
        {
            id: 5,
            content: "Live Adventist TV Stations:",
            additionalUrl: "http://www.audiotreasure.com/",

            innerLinks: [
                {
                    id: 1,
                    content: "Visit Us",
                    anchorUrl: "http://www.adventist.org/"
                },
                {
                    id: 2,
                    content: "Links",
                    anchorUrl: "http://www.adventist.org/"
                }
            ]
        },
        {
            id: 6,
            content: "Ghana News",
            additionalUrl: "http://www.audiotreasure.com/",

            innerLinks: [
                {
                    id: 1,
                    content: "Live Radio",
                    anchorUrl: "http://www.adventist.org/"
                },
                {
                    id: 2,
                    content: "Joy News TV Live",
                    anchorUrl: "http://www.adventist.org/"
                }
            ]
        }
    ];

    return (
        <>
            <CustomContainer sectionClass="news-events-section justify-content-xl-center" containerClass="py-4 py-md-5">
                <Row className='row-gap-4'>
                    <Col md={6} className='d-flex flex-column gap-2 gap-xl-3'>
                        <Stack as="h2" className="ff-sour fw-medium fs-1"
                            style={{ flex: "unset" }}>
                            {Affiliations[0].title}
                        </Stack>

                        <Stack as="div" className='gap-2 gap-xl-3' style={{ flex: "unset" }}>
                            {Affiliations.slice(1).map((link) => (
                                <Stack key={link.id} as="div" className="affiliation-item" style={{ flex: "unset" }}>
                                    {link.content && (
                                        <Stack as="a" href={link.anchorUrl} className="ff-lato fw-light fs-5 text-black text-capitalize gap-2 gap-xl-3 text-decoration-none" style={{ flex: "unset", width: "fit-content" }}>
                                            <Stack as="span">
                                                {link.id}. {link.content}
                                            </Stack>
                                        </Stack>
                                    )}

                                    {link.innerLinks && link.innerLinks.length > 0 && (
                                        <Stack as="div" className='ms-3 mt-2 gap-1'>
                                            {link.innerLinks.map((innerLink) => (
                                                <Stack key={innerLink.id} as="a" href={innerLink.anchorUrl} className="ff-lato fw-light fs-5 text-black text-capitalize gap-2 gap-xl-3 text-decoration-none" style={{ flex: "unset", width: "fit-content" }}>
                                                    {innerLink.content && (
                                                        <Stack as="span">
                                                            {link.id}. {innerLink.id}. {innerLink.content}
                                                        </Stack>
                                                    )}
                                                </Stack>
                                            ))}
                                        </Stack>
                                    )}
                                </Stack>
                            ))}

                        </Stack>
                    </Col>
                    <Col md={6} className='d-flex flex-column gap-2 gap-xl-3'>
                        <Stack as="h2" className="ff-sour fw-medium fs-1"
                            style={{ flex: "unset" }}>
                            {MediaLinks[0].title}
                        </Stack>

                        <Stack as="div" className='gap-2 gap-xl-3' style={{ flex: "unset" }}>
                            {MediaLinks.slice(1).map((link) => (
                                <Stack key={link.id} as="div" className="affiliation-item" style={{ flex: "unset" }}>
                                    {link.content && (
                                        <Stack as="a" href={link.anchorUrl} className="ff-lato fw-light fs-5 text-black text-capitalize gap-2 gap-xl-3 text-decoration-none" style={{ flex: "unset", width: "fit-content" }}>
                                            <Stack as="span">
                                                {link.id}. {link.content}
                                            </Stack>
                                        </Stack>
                                    )}

                                    {link.innerLinks && link.innerLinks.length > 0 && (
                                        <Stack as="div" className='ms-3 mt-2 gap-1'>
                                            {link.innerLinks.map((innerLink) => (
                                                <Stack key={innerLink.id} as="a" href={innerLink.anchorUrl} className="ff-lato fw-light fs-5 text-black text-capitalize gap-2 gap-xl-3 text-decoration-none" style={{ flex: "unset", width: "fit-content" }}>
                                                    {innerLink.content && (
                                                        <Stack as="span">
                                                            {link.id}. {innerLink.id}. {innerLink.content}
                                                        </Stack>
                                                    )}
                                                </Stack>
                                            ))}
                                        </Stack>
                                    )}
                                </Stack>
                            ))}

                        </Stack>
                    </Col>
                </Row>
            </CustomContainer>
        </>
    );
};

export default WebLinks;
