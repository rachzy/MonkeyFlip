import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game/index.js";
import Index from "./pages/Index";
import Credits from "./pages/Credits/index.js";
import Help from "./pages/Help/index.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/help" element={<Help />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
