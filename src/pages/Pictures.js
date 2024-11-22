import React, { useState, useEffect } from "react";
import CustomContainer from "../components/CustomContainer";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Stack } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";

const Pictures = () => {
    const galleries = {
        Cultural: [
            {
                id: 1,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image One",
            },
            {
                id: 2,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Two",
            },
            {
                id: 3,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image One",
            },
            {
                id: 4,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image Two",
            },
            {
                id: 5,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image One",
            },
            {
                id: 6,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image Two",
            },
            {
                id: 1,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image One",
            },
            {
                id: 2,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image Two",
            },
            {
                id: 3,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image One",
            },
            {
                id: 4,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Two",
            },
            {
                id: 5,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image One",
            },
            {
                id: 6,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image Two",
            },
        ],

        Family: [
            {
                id: 1,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Three",
            },
            {
                id: 2,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image Four",
            },
            {
                id: 3,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Three",
            },
            {
                id: 4,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image Four",
            },
            {
                id: 5,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image Three",
            },
            {
                id: 6,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image Four",
            },
            {
                id: 7,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Three",
            },
            {
                id: 8,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Four",
            },
            {
                id: 9,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image Three",
            },
            {
                id: 10,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Four",
            },
            {
                id: 11,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Three",
            },
            {
                id: 12,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image Four",
            },
            {
                id: 13,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Three",
            },
            {
                id: 14,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image Four",
            },
            {
                id: 15,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image Three",
            },
            {
                id: 16,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image Four",
            },
            {
                id: 17,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Three",
            },
            {
                id: 18,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Four",
            },
            {
                id: 19,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image Three",
            },
            {
                id: 20,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image Four",
            },
        ],

        Service: [
            {
                id: 1,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image One",
            },
            {
                id: 2,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image Two",
            },
            {
                id: 3,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image One",
            },
            {
                id: 4,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Two",
            },
            {
                id: 5,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image One",
            },
            {
                id: 6,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image Two",
            },
            {
                id: 7,
                src: require("../assets/image/picture-slide-2.webp"),
                alt: "Image One",
            },
            {
                id: 8,
                src: require("../assets/image/picture-slide-1.webp"),
                alt: "Image Two",
            },
            {
                id: 9,
                src: require("../assets/image/picture-slide-4.webp"),
                alt: "Image One",
            },
            {
                id: 10,
                src: require("../assets/image/picture-slide-3.webp"),
                alt: "Image Two",
            },
            {
                id: 11,
                src: require("../assets/image/picture-slide-6.webp"),
                alt: "Image One",
            },
            {
                id: 12,
                src: require("../assets/image/picture-slide-5.webp"),
                alt: "Image Two",
            },
        ],
    };

    const [lightboxData, setLightboxData] = useState({
        isOpen: true,
        gallery: galleries.Cultural,
        currentIndex: 0,
    });

    const [activeTab, setActiveTab] = useState("Cultural");

    const openLightbox = (gallery) => {
        setLightboxData((prevData) => {
            // Only update if the gallery is different from the previous one
            if (prevData.gallery !== gallery) {
                return {
                    isOpen: true,
                    gallery: gallery,
                    currentIndex: 0,
                };
            }
            return prevData;  // If the gallery is the same, do nothing
        });
    };


    const closeLightbox = () => {
        setLightboxData((prev) => ({
            ...prev,
            isOpen: false,
        }));
    };

    const goToPrevious = () => {
        setLightboxData((prev) => ({
            ...prev,
            currentIndex:
                (prev.currentIndex - 1 + prev.gallery.length) % prev.gallery.length,
        }));
    };

    const goToNext = () => {
        setLightboxData((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.gallery.length,
        }));
    };

    const handleTabSelect = (key) => {
        setActiveTab(key);
        openLightbox(galleries[key]);
    };


    useEffect(() => {
        // Don't run the effect if there's no gallery
        if (lightboxData.gallery) {
            openLightbox(lightboxData.gallery);
        }
    }, [lightboxData.gallery]);
    return (
        <>
            <CustomContainer sectionClass="py-4 py-md-5">
                <Stack as="div" className="about-tabs d-flex flex-column row-gap-4">
                    <Tabs
                        activeKey={activeTab}
                        onSelect={handleTabSelect}
                        id="fill-tab-example"
                        className="d-flex gap-2 flex-nowrap ff-lato fw-bold fs-5 text-black"
                        fill
                    >
                        <Tab eventKey="Cultural" title="Cultural Day">
                            <Stack as="h2" className="ff-sour fw-medium fs-1">
                                Ghanaian Cultural Day
                            </Stack>
                        </Tab>

                        <Tab eventKey="Family" title="Family Pictures">
                            <Stack as="h2" className="ff-sour fw-medium fs-1">
                                Family Pictures
                            </Stack>
                        </Tab>
                        <Tab eventKey="Service" title="Services">
                            <Stack as="h2" className="ff-sour fw-medium fs-1">
                                Service
                                @ Huntsville SDA Church
                                Nov 15,2014
                            </Stack>
                        </Tab>
                    </Tabs>

                    {/* Lightbox Render */}
                    {lightboxData.isOpen && (
                        <Lightbox
                            images={lightboxData.gallery}
                            currentIndex={lightboxData.currentIndex}
                            isOpen={lightboxData.isOpen}
                            onClose={closeLightbox}
                            onMovePrevRequest={goToPrevious}
                            onMoveNextRequest={goToNext}
                        />
                    )}
                </Stack>
            </CustomContainer>
        </>
    );
};
// last updated
export default Pictures;
