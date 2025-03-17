import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import NewMedia from "./pages/NewMedia";
import Director from "./pages/Director";
import Producer from "./pages/Producer";
import Type from "./pages/Type";
import Navbar from "./components/NavBar";
import Medialayout from "./pages/MediaLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col bg-primary-default text-colortext-default font-lexend">
        <Navbar />
        <Routes>
          <Route path="/" element={<Medialayout />} />
          <Route path="/createMedia" element={<NewMedia />} />
          <Route path="/director" element={<Director></Director>} />
          <Route path="/genre" element={<Genre></Genre>} />
          <Route path="/producer" element={<Producer></Producer>} />
          <Route path="/type" element={<Type></Type>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
