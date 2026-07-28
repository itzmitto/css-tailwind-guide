import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Flexbox from "./pages/Flexbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<Colors />} />
        <Route
          path="/flexbox" element={<Flexbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;