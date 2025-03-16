import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./pages/Genre";
import NewMedia from "./pages/NewMedia";
import Navbar from "./components/NavBar";
import Medialayout from "./pages/MediaLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-dvh flex flex-col bg-primary-default text-colortext-default">
        <Navbar />
        <Routes>
          <Route path="/" element={<Medialayout/>} />
          <Route path="/createMedia" element={<NewMedia />} />
          <Route path="/director" element={<h1>Directory</h1>} />
          <Route path="/genre" element={<Genre></Genre>} />
          <Route path="/producer" element={<h1>producer</h1>} />
          <Route path="/type" element={<h1>type</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
