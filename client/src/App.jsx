import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import NewMedia from "./pages/NewMedia";
import Director from "./pages/Director";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Media</h1>} />
        <Route path="/createMedia" element={<NewMedia/>} />
        <Route path="/updateMedia" element={<h1>Update Media</h1>} />
        <Route path="/director" element={<Director></Director>} />
        <Route path="/genre" element={<Genre></Genre>} />
        <Route path="/producer" element={<h1>producer</h1>} />
        <Route path="/type" element={<h1>type</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
