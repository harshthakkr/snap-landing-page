import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-epilogue px-8 pt-4 lg:px-12 lg:py-6">
      <Navbar />
      <div className="lg:px-8 xl:px-12">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
