import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Flexbox from "./pages/Flexbox";
import PlaygroundPage from "./pages/Playground";
import Builder from "./pages/Builder";
import LayoutBuilderPage from "./pages/LayoutBuilder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/flexbox" element={<Flexbox />} />
        <Route
          path="/playground"
          element={<PlaygroundPage />}
        />
        <Route
          path="/builder"
          element={<Builder />}
        />
        <Route
          path="/layout-builder"
          element={<LayoutBuilderPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;