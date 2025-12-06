import Navbar from "./components/Navbar";
import Grow from "./components/Grow";
import Inspire from "./components/Inspire";
import Empower from "./components/Empower";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <section id="grow"><Grow /></section>
      <section id="inspire"><Inspire /></section>
      <section id="empower"><Empower /></section>
      <Footer />
    </div>
  );
}

export default App;
