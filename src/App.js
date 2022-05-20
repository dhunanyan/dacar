import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import Contact from "./pages/contact/contact.component";
import Home from "./pages/home/home.component";
import Offer from "./pages/offer/offer.component";
import Vehicles from "./pages/vehicles/vehicles.component";
import Work from "./pages/work/work.component";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/offer" element={<Offer />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
