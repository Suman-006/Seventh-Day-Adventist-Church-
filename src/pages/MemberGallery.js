import React, { useState } from "react";
import CustomContainer from "../components/CustomContainer";
import { Image, Stack } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";

const MemberGallery = () => {
    const imageGallery = [
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
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + imageGallery.length) % imageGallery.length);
    };
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % imageGallery.length);
    };
    return (
        <>
            <Stack className="">
                <CustomContainer sectionClass="py-4 py-md-5">
                    <Stack className="about-tabs d-flex flex-column row-gap-3">
                        <Stack as="h2" className="ff-sour fw-medium fs-1">
                            Member Pictures
                        </Stack>

                        <Lightbox
                            images={imageGallery}
                            currentIndex={currentIndex}
                            isOpen={lightboxOpen}
                            onClose={closeLightbox}
                            onMovePrevRequest={goToPrevious}
                            onMoveNextRequest={goToNext}
                        >
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Image
                                    src={imageGallery[currentIndex].src}
                                    alt={imageGallery[currentIndex].alt}
                                    style={{ maxWidth: "80%", height: "auto" }}
                                />
                            </div>
                        </Lightbox>

                    </Stack>
                </CustomContainer>
            </Stack>
        </>
    );
};

export default MemberGallery;
