import React from "react";
import { Stack } from "react-bootstrap";

const GoogleMap = () => {
    return (
        <Stack as="div" style={{ width: "100%", height: "100%", minHeight: "400px", overflow: "hidden" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13053.516838001931!2d-95.39941598545441!3d29.938311883845675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e9cd1690ddab%3A0x896daa9f79005a79!2sHouston%20Ghanaian%20SDA%20Church!5e0!3m2!1sen!2sin!4v1731910061207!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </Stack>
    );
};

export default GoogleMap;
