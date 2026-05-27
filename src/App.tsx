import { Outlet } from "react-router-dom";
import Navbar from "./components/BWNavbar";
import Footer from "./components/Footer";
import "./css/core.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
