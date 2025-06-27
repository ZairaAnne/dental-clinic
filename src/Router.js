import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home-page/myhome";
import About from "./Pages/About-page/about";
import Services from "./Pages/Services-page/services";
import Promos from "./Pages/Promos-page/promos";
import Business from "./Pages/Business-page/business";
import Locations from "./Pages/Location-page/locations";
import Booking from "./Pages/Booking-page/booking";
import Shop from "./Pages/Shop-page/shop";

const AppRouter = () => {
  return (
     <> {/* React Fragment to wrap everything */}
    <Navbar /> {/* Navbar stays outside Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About Us />} />
        <Route path="/services" element={<Services />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/business" element={<Business />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </>
  );
};

export default AppRouter;

