import Marquees from "./components/marquees";
import Navbar from "./components/Navbar";
import Products from "./components/products";
import Stripes from "./components/stripes";
import Work from "./components/work";
import "./assets/style.css";
import Cards from "./components/cards";
import Footer from "./components/footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-100 bg-zinc-900">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
