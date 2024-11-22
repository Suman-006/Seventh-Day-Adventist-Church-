import React, { lazy, Suspense } from "react";
import "./App.css";
import "./assets/style/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomContainer from "./components/CustomContainer";
import MemberGallery from "./pages/MemberGallery";
import NewsEvents from "./pages/NewsEvents";
import WebLinks from "./pages/WebLinks";
import VisitUs from "./pages/VisitUs";

// Lazy loading for routes to optimize performance
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Media = lazy(() => import("./pages/Media"));
const Sermons = lazy(() => import("./pages/Sermons"));
const Songs = lazy(() => import("./pages/Songs"));
const Videos = lazy(() => import("./pages/Videos"));
const Pictures = lazy(() => import("./pages/Pictures"));

const NotFound = () => <CustomContainer sectionClass="justify-content-center" containerClass="text-center ff-sour fw-light fs-3 text-black">404 - Page Not Found</CustomContainer>; // Fallback for invalid routes

function App() {
  return (
    <Router>
      <Stack className="min-vh-100 d-flex justify-content-between">
        <Header />
        <Suspense fallback={<CustomContainer sectionClass="justify-content-center" containerClass="text-center ff-sour fw-light fs-3 text-black">Loading...</CustomContainer>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/member-pictures" element={<MemberGallery />} />
            <Route path="/newsevents" element={<NewsEvents />} />
            <Route path="/links" element={<WebLinks />} />
            <Route path="/visitus" element={<VisitUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Stack>
    </Router>
  );
}

export default App;
