import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
