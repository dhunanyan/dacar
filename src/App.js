import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Bolt from "./pages/bolt/bolt.component";
import Contact from "./pages/contact/contact.component";
import FreeNow from "./pages/free-now/free-now.component";
import Home from "./pages/home/home.component";
import Offer from "./pages/offer/offer.component";
import Uber from "./pages/uber/uber.component";
import Vehicles from "./pages/vehicles/vehicles.component";
import Work from "./pages/work/work.component";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/offer" element={<Offer />} />
        <Route exact path="/offer/vehicles" element={<Vehicles />} />
        <Route exact path="/offer/driver" element={<Vehicles />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/work/uber" element={<Uber />} />
        <Route exact path="/work/bolt" element={<Bolt />} />
        <Route exact path="/work/free-now" element={<FreeNow />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
