import { Route, Routes } from "react-router";

import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Bolt from "./pages/bolt/bolt.component";
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
        <Route exact path="/dacar" element={<Home />} />
        <Route exact path="/dacar/offer" element={<Offer />} />
        <Route exact path="/dacar/offer/vehicles" element={<Vehicles />} />
        <Route exact path="/dacardacar/offer/driver" element={<Vehicles />} />
        <Route exact path="/dacar/work" element={<Work />} />
        <Route exact path="/dacar/work/uber" element={<Uber />} />
        <Route exact path="/dacar/work/bolt" element={<Bolt />} />
        <Route exact path="/dacar/work/free-now" element={<FreeNow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
