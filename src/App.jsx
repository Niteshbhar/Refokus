import Navbar from "./components/Navbar";
import Products from "./components/products";
import Stripes from "./components/stripes";
import Work from "./components/work";

function App() {
  return (
    <>
      <div className="w-full h-100 bg-zinc-900">
        <Navbar />
        <Work/>
        <Stripes/>
        <Products/>
      </div>
    </>
  );
}

export default App;
