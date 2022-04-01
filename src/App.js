import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Feature />
    </div>
  );
}

export default App;
