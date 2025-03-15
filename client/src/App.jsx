import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import NewMedia from "./pages/NewMedia";
import Director from "./pages/Director";
import Producer from "./pages/Producer";
import Type from "./pages/Type";

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
    </BrowserRouter>
  );
};

export default App;
