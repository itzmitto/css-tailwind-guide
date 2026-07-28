import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;