import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import SmoothScroll from "./components/site/SmoothScroll";
import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import Marquee from "./components/site/Marquee";
import CoffeeTypes from "./components/site/CoffeeTypes";
import History from "./components/site/History";
import OriginsMap from "./components/site/OriginsMap";
import Brewing from "./components/site/Brewing";
import Recipes from "./components/site/Recipes";
import Stats from "./components/site/Stats";
import Gallery from "./components/site/Gallery";
import Testimonials from "./components/site/Testimonials";
import FAQ from "./components/site/FAQ";
import Footer from "./components/site/Footer";

function Landing() {
  return (
    <div className="grain relative bg-darkroast min-h-screen text-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CoffeeTypes />
        <History />
        <OriginsMap />
        <Brewing />
        <Recipes />
        <Stats />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(26,22,18,0.9)",
            border: "1px solid rgba(200,154,71,0.3)",
            color: "#F6F2EC",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </SmoothScroll>
  );
}

export default App;
