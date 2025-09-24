import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section className="flex text-[#242424]">
      <Navbar />
      <div className="p-15 flex flex-col gap-5 w-full h-full">
        <Home />
      </div>
    </section>
  );
}

export default App;
