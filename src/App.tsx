import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
    </Router>
  );
};

export default App;
