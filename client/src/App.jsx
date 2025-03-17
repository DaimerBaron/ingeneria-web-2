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

      <Routes>
        <Route path="/" element={<h1>Media</h1>} />
        <Route path="/createMedia" element={<NewMedia/>} />
        <Route path="/updateMedia" element={<h1>Update Media</h1>} />
        <Route path="/director" element={<Director></Director>} />
        <Route path="/genre" element={<Genre></Genre>} />
        <Route path="/producer" element={<Producer></Producer>} />
        <Route path="/type" element={<Type></Type>} />
      </Routes>

      <div className="h-screen flex flex-col bg-primary-default text-colortext-default">
        <Navbar />
        <Routes>
          <Route path="/" element={<Medialayout/>} />
          <Route path="/createMedia" element={<NewMedia />} />
          <Route path="/director" element={<h1>Directory</h1>} />
          <Route path="/genre" element={<Genre></Genre>} />
          <Route path="/producer" element={<h1>producer</h1>} />
          <Route path="/type" element={<h1>type</h1>} />
        </Routes>

    </BrowserRouter>
  );
};

export default App;
