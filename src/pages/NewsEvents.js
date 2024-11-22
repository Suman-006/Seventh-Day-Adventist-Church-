import React from 'react';
import CustomContainer from '../components/CustomContainer';
import { Button, Col, Row, Stack } from 'react-bootstrap';

const NewsEvents = () => {
    const LatestNews = [
        {
            title: "Latest News"
        },
        {
            id: 1,
            content: "Please show your support and donate to our building fund.",
            anchorText: "Call us>>",
            anchorUrl: "/visitus"
        },
    ];
    const Events = [
        {
            title: "Events"
        },
        {
            id: 1,
            content: "PaGAF Annual Retreat @ Flagstaff, Arizona -  July 24th- July 28th, 2019",
            anchorText: "",
            anchorUrl: ""
        },
    ];

    return (
        <>
            <CustomContainer sectionClass="news-events-section justify-content-xl-center" containerClass="py-4 py-md-5">
                <Row className='row-gap-4'>
                    <Col xl={6} className='d-flex flex-column gap-3'>
                        <Stack as="h2" className="ff-sour fw-medium fs-1" style={{ flex: "unset" }}>
                            {LatestNews[0].title}
                        </Stack>

                        <Stack as="div" className='gap-3'>
                            {LatestNews.slice(1).map((news) => (
                                <Stack key={news.id} as="div" className="ff-lato fw-light fs-4 text-black text-capitalize gap-3">
                                    {(news.content) && (
                                        <Stack as="span">
                                            {news.id}. {news.content}
                                        </Stack>
                                    )}

                                    {(news.anchorText && news.anchorUrl) && (
                                        <Button as="a" href={news.anchorUrl} style={{ width: "max-content" }} className="dark-btn px-5">
                                            {news.anchorText}
                                        </Button>
                                    )}
                                </Stack>
                            ))}
                        </Stack>
                    </Col>

                    <Col xl={6} className='d-flex flex-column gap-3'>
                        <Stack as="h2" className="ff-sour fw-medium fs-1" style={{ flex: "unset" }}>
                            {Events[0].title}
                        </Stack>

                        <Stack as="div" className='gap-3'>
                            {Events.slice(1).map((event) => (
                                <Stack key={event.id} as="div" className="ff-lato fw-light fs-4 text-black text-capitalize gap-3">
                                    {(event.content) && (
                                        <Stack as="span">
                                            {event.id}. {event.content}
                                        </Stack>
                                    )}

                                    {(event.anchorText && event.anchorUrl) && (
                                        <Button as="a" href={event.anchorUrl} style={{ width: "max-content" }} className="dark-btn px-5">
                                            {event.anchorText}
                                        </Button>
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

export default NewsEvents;
