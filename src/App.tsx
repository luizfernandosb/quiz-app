import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./pages/game";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}
