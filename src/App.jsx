import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Encontros from "./components/Encontros";
import Navbar from "./components/Navbar";
import Peneiras from "./components/Peneiras";
import Copa from "./components/Copa";
import Historia from "./components/Historia";
import Sobre from "./components/Sobre";
import Usuarios from "./components/Usuarios";

function App() {
  return (
    <section className="flex text-[#242424]">
      <Navbar />
      <div className="p-15 flex flex-col gap-5 w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encontros" element={<Encontros />} />
          <Route path="/peneiras" element={<Peneiras />} />
          <Route path="/copa" element={<Copa />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
