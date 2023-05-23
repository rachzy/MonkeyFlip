import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game/index.js";
import Index from "./pages/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
